'use strict';

const modal = document.querySelector("[data-modal]");
const modalButton = document.querySelector("[data-modal-button]");
const modalClose = document.querySelector("[data-modal-close]");
const modalBase = document.querySelector(".modal__base");

export const initModal = () => {
  if (modal && modalButton) {
    modalButton.addEventListener("click", evt => {
      evt.preventDefault();
      modal.classList.add("is-active");
      document.body.classList.add("hidden");
    });

    modalClose.addEventListener("click", evt => {
      evt.preventDefault();
      modal.classList.remove("is-active");
      document.body.classList.remove("hidden");
    });

    modalBase.addEventListener('click', (evt) => {
      if (evt.target === modalBase) {
        modal.classList.remove("is-active");
        document.body.classList.remove("hidden");
      }
    });
  }
};
