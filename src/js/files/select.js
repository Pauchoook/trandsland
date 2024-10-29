export default function select() {
  const buttons = document.querySelectorAll(".form__select-btn");
  const selects = document.querySelectorAll(".form__select");

  if (buttons.length) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const currentSelect = btn.closest(".form__select");
        const currentInput = currentSelect.querySelector(".form__input-show");
        const currentTitle = currentSelect.querySelector(".form__select-title");

        if (!currentSelect.classList.contains("open")) {
          selects.forEach(s => s.classList.remove("open"));

          currentSelect.classList.add("open");
          currentSelect.addEventListener("click", changeSelect);

          document.addEventListener("click", closeSelect);

          function changeSelect(e) {
            e.stopPropagation();

            if (e.target.classList.contains("form__select-item")) {
              const value = e.target.textContent;
              currentInput.value = value;
              currentTitle.textContent = value;
              
              closeSelect(e);
              
              return currentSelect.removeEventListener("click", changeSelect);
            }
          }
        } else {
          currentSelect.classList.remove("open");
        }
      });
    });

    function closeSelect(e) {
      let currentSelect = e?.target.closest(".form__select");
      
      if (!currentSelect) currentSelect = document.querySelector(".form__select.open");
      
      currentSelect.classList.remove("open");
    
      return document.removeEventListener("click", closeSelect);
    }
  }
}
