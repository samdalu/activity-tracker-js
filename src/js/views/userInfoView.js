import View from "./View";
import modalView from "./modalView";

class UserInfoView extends View {
  _parentElement = document.getElementById("profileInfo");

  _generateMarkup() {
    return `<p>Hello, User</p>
        <p id="addActivity">Add Activity</p>`;
  }

  addActivityButton() {
    this._parentElement.addEventListener("click", event => {
      event.preventDefault();
      modalView.toggleModal();
    });
  }

  userInfoHandler(handler) {
    window.addEventListener("load", handler);
  }
}

export default new UserInfoView();
