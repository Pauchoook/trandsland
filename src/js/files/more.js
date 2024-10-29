export default function more() {
  const buttonsMore = document.querySelectorAll(".more-btn");
  if (buttonsMore.length) {
    buttonsMore.forEach((btn) => {
      btn.addEventListener("click", () => {
        const parent = btn.closest(".more-parent");
        const moreItem = parent.querySelector(".more");

        moreItem.classList.remove("more");
        btn.remove();
      });
    });
  }
}
