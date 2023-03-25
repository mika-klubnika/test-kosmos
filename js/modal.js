'use strict';

const modal = document.querySelector("[data-modal]");
const modalButton = document.querySelector("[data-modal-button]");
const modalClose = document.querySelector("[data-modal-close]");

export const initModal = () => {
  if (modal && modalButton) {
    modalButton.addEventListener("click", evt => {
      evt.preventDefault();
      modal.classList.add("is-active");
    });

    modalClose.addEventListener("click", evt => {
      evt.preventDefault();
      modal.classList.remove("is-active");
    });
  }
};
