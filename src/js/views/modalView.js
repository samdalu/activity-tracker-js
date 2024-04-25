import View from "./View";

class ModalView extends View {
  _parentElement = document.getElementById("modal-one");
  _exit = this._parentElement.querySelectorAll(".modal-exit");

  toggleModal() {
    this._parentElement.classList.toggle("open");
  }

  addHandlerExit() {
    this._exit.forEach(function (exit) {
      exit.addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          this.toggleModal();
        }.bind(this)
      );
    }, this);
  }
}

export default new ModalView();
