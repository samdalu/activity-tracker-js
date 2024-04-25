import * as model from "./model.js";
import activityView from "./views/activityView.js";
import addActivityView from "./views/addActivityView.js";
import mapView from "./views/mapView.js";
import modalView from "./views/modalView.js";
import userInfoView from "./views/userInfoView.js";

const controlActivities = () => {
  model.loadActivities();
  const activities = model.state.activities;
  activityView.render(activities);
  for (let activity of activities) {
    mapView.addPinToMap(activity);
  }
};

const controlAddActivity = activity => {
  modalView.toggleModal();
  model.addActivity(activity);
  const activities = model.state.activities;
  activityView.render(activities);
  for (let activity of activities) {
    mapView.addPinToMap(activity);
  }
};

const controlUserInfo = () => {
  userInfoView.render();
  userInfoView.addActivityButton();
};

const init = function () {
  mapView.loadMap();
  userInfoView.userInfoHandler(controlUserInfo);
  modalView.addHandlerExit();
  activityView.addHandlerRender(controlActivities);
  addActivityView.addHandlerAddActivity(controlAddActivity);
};
init();
