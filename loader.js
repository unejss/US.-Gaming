document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.querySelector(".main_content");
  if (mainContent) {
    mainContent.classList.add("oneft");
  }
});

window.addEventListener("load", function () {
  const mainContent = document.querySelector(".main_content");
  const loader = document.querySelector(".loader-main");

  if (mainContent) {
    mainContent.classList.remove("oneft");
  }

  if (loader) {
    loader.classList.add("loader-rem");
  }
});
