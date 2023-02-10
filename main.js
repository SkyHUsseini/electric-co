"use strict";
const navBtn = document.querySelector(".nav-toggle-btn");
const navToggle = document.querySelector(".nav-wrapper");

navBtn.addEventListener("click", function () {
  navToggle.toggleAttribute("visible");
});
