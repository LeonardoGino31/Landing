"use strict";

const showToast = () => {
  const toast = document.getElementById("toast-interactive");
  if (toast) {
    toast.classList.add("md:block");
  } else {
    console.warn("No se encontró el elemento con id 'toast-interactive'");
  }
};
const showVideo = () => {
    const demo = document.getElementById("demo");
    if (demo) {
        demo.addEventListener("click", () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        });
    }
};
(() => {
    showToast();
    showVideo();
})();