//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const openModalButton = document.getElementById("openModal");
  const modal = document.getElementById("modal");
  const closeModalButton = document.querySelector(".close-modal");

  openModalButton.addEventListener("click", function () {
    console.log("click");
    modal.style.display = "block";
  });

  closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});