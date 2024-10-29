import { servicesClose } from "./services.js";

export default function burger() {
  const buttonsMenu = document.querySelectorAll(".btn-menu");
  const burger = document.querySelector("#burger");

  if (buttonsMenu.length) {
    buttonsMenu.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        if (burger.classList.contains("open")) {
          burgerClose();
        } else {
          servicesClose();

          burger.classList.add("open");
          btn.classList.add("active");

          document.body.classList.add("body-hidden");
          burger.addEventListener("click", (e) => e.stopPropagation());

          document.body.addEventListener("click", burgerClose);
        }
      });
    });
  }
}

export function burgerClose() {
  const burger = document.querySelector("#burger");
  if (burger.classList.contains("open")) {
    const currentBtn = document.querySelector(".btn-menu.active");

    burger.classList.remove("open");
    document.body.classList.remove("body-hidden");
    currentBtn.classList.remove("active");

    document.body.removeEventListener("click", burgerClose);
  }
}
