export default function show() {
  const showParents = document.querySelectorAll(".show");
  if (showParents.length) {


    showParents.forEach((parent) => {
      const media = parent.dataset.mediaShow;
      const showItems = +parent.dataset.showItems;
      const items = parent.querySelectorAll(".show-item");
      const btn = parent.querySelector(".show-btn");
      let startItem = showItems;

      if (window.matchMedia(`(max-width: ${media}px)`).matches) {
        Array.from(items)
          .slice(0, startItem)
          .forEach((item) => item.classList.add("active"));
      }

      btn.addEventListener("click", () => {
        Array.from(items)
          .slice(4, startItem + showItems)
          .forEach((item) => item.classList.add("active"));
        startItem += showItems;

        if (startItem >= items.length) btn.remove();
      });
    });
  }
}
