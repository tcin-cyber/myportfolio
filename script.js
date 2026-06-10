/*POPUP WINDOWS*/
const moreInfoButtons = document.querySelectorAll(".more-info-button");

for (const button of moreInfoButtons) {
  button.addEventListener("click", (event) => {
    const popupContainer = event.currentTarget.parentElement.nextElementSibling;

    popupContainer.style.display = "block";
  });
}

const closeButtons = document.querySelectorAll(".close-popup-button");

for (const button of closeButtons) {
  button.addEventListener("click", (event) => {
    const popupContainer = event.currentTarget.closest(
      ".popup-section-container",
    );

    popupContainer.style.display = "none";
  });
}


