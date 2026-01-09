// Handles tutorial modal logic
window.addEventListener("DOMContentLoaded", () => {
  const tutorialBtn = document.getElementById("tutorialBtn");
  const tutorialModal = document.getElementById("tutorialModal");
  const tutorialClose = document.getElementById("tutorialClose");
  const tutorialBackdrop = document.getElementById("tutorialBackdrop");

  tutorialBtn.addEventListener("click", () => {
    tutorialModal.classList.add("show");
    tutorialBackdrop.classList.add("show");
  });

  tutorialClose.addEventListener("click", () => {
    tutorialModal.classList.remove("show");
    tutorialBackdrop.classList.remove("show");
  });

  tutorialBackdrop.addEventListener("click", () => {
    tutorialModal.classList.remove("show");
    tutorialBackdrop.classList.remove("show");
  });
});
