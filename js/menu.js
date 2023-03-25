"use strict";

const toggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-menu-list]");
const header= document.querySelector("[data-menu]");

export const initMenu = () => {
  if (header && toggle && navigation) {
    header.classList.remove("header--nojs");

    toggle.addEventListener("click", () => {
      header.classList.toggle("is-active");
      navigation.classList.toggle("is-active");
      document.body.classList.toggle("hidden");

      if (navigation.classList.contains("is-active")) {
        toggle.setAttribute("aria-label", "Закрыть меню");
      } else {
        toggle.setAttribute("aria-label", "Открыть меню");
      }
    });

    window.addEventListener("resize", (evt) => {
      if (evt.currentTarget.innerWidth >= 1023) {
        header.classList.remove("is-active");
        navigation.classList.remove("is-active");
      }
    })
  };
}
