import View from "./View.js";

class AddActivityView extends View {
  _parentElement = document.getElementById("addActivityForm");

  addHandlerAddActivity(handler) {
    this._parentElement.addEventListener("submit", e => {
      e.preventDefault();
      const activityName = e.target.elements.activity.value;
      const activityDuration = e.target.elements.duration.value;
      handler({
        activityDuration,
        activityName,
      });
      this._parentElement.reset();
    });
  }
}

export default new AddActivityView();
