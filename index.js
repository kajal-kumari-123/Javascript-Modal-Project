const showButtons = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-modal");

const showModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const getElement = (passModalArray) => {
  for (i = 0; i < passModalArray.length; i++) {
    passModalArray[i].addEventListener("click", showModal);
  }
};

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") closeModal();
});

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
getElement(showButtons);
