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

/*CLOSE POPUP IF CLICKING
   OUTSIDE WINDOW*/
const popupContainers = document.querySelectorAll(".popup-section-container");

for (const popup of popupContainers) {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
}

/*CONTACT FORM*/
const form = document.querySelector("#Contact");
const formMessage = document.querySelector("#form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "#dc2626";
    formMessage.textContent = "Please complete all required fields.";

    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    formMessage.style.color = "#dc2626";
    formMessage.textContent = "Please enter a valid email address.";

    return;
  }

  formMessage.style.color = "#16a34a";

  formMessage.textContent =
    "Thank you! Your message has been submitted successfully.";

  form.reset();
});

/*HERO BUTTONS*/
const heroButtons = document.querySelectorAll(
  ".primary-button, .secondary-button",
);

for (const button of heroButtons) {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-3px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
}
