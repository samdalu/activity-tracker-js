import View from "./View";
import L from "leaflet";
import iconImage from "../../img/marker-icon.png";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";

class MapView extends View {
  _parentElement = document.getElementById("map");
  _map;
  loadMap() {
    navigator.geolocation?.getCurrentPosition(
      position => {
        const { longitude, latitude } = position.coords;
        const coords = [latitude, longitude];
        localStorage.setItem("userLocation", JSON.stringify(coords));
        this._map = L.map("map").setView(coords, 13);
        L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this._map);
      },
      () => {
        console.log("unable to fetch location");
      }
    );
  }

  addPinToMap(activity) {
    const myIcon = L.icon({
      iconUrl: iconImage,
      iconSize: [32, 45],
    });
    L.marker(activity.activityLocation, { icon: myIcon })
      .addTo(this._map)
      .bindPopup(`${activity.activityName}`)
      .openPopup();
  }
}

export default new MapView();
