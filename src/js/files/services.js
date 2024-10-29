import { burgerClose } from "./burger.js";

export default function services() {
  const btnsServices = document.querySelectorAll(".btn-services");
  const servicesMenu = document.querySelector(".services");

  if (btnsServices.length) {
    btnsServices.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        if (!servicesMenu.classList.contains("open")) {
          burgerClose();

          servicesMenu.classList.add("open");
          servicesMenu.addEventListener("click", (e) => e.stopPropagation());
          document.body.classList.add("body-hidden");
          btnsServices.forEach(b => b.classList.add("active"));

          document.addEventListener("click", servicesClose);
        } else {
          servicesClose();
        }
      });
    });

  }
}

export function servicesClose() {
  const btnsServices = document.querySelectorAll(".btn-services");
  const servicesMenu = document.querySelector(".services");

  btnsServices.forEach((btn) => btn.classList.remove("active"));
  servicesMenu.classList.remove("open");
  document.body.classList.remove("body-hidden");
  btnsServices.forEach(b => b.classList.remove("active"));

  return document.removeEventListener("click", servicesClose);
}