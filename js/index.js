const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".navigation__link--modal");
const modalClose = document.querySelector(".modal__close");

modalButton.addEventListener("click", evt => {
  evt.preventDefault();
  modal.classList.add("modal__show");
});

modalClose.addEventListener("click", evt => {
  evt.preventDefault();
  modal.classList.remove("modal__show");
});
