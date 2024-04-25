import View from "./View.js";

class ActivityView extends View {
  _parentElement = document.getElementById("activities");

  _generateActivityMarkUp = activity => {
    return `<div class='today-progress square-info'>You were ${activity.activityName} for ${activity.activityDuration} minutes</div>`;
  };

  _generateMarkup() {
    return this._data.map(this._generateActivityMarkUp).join("");
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
}

export default new ActivityView();
