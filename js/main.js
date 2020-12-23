$(document).ready(function () {
  var modalButton = $("[data-toggle=modal]");
  var CloseModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  CloseModalButton.on("click", closeModal); 

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  // video-modal
  var modalButton = $("[data-toggle=video-modal]");
  var CloseModalButton = $(".video-modal__close");
  modalButton.on("click", openModal);
  CloseModalButton.on("click", closeModal); 

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".video-modal__overlay").addClass("video-modal__overlay--visible");
    $(targetModal).find(".video-modal__dialog").addClass("video-modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".video-modal__overlay");
    var modalDialog = $(".video-modal__dialog");
    modalOverlay.removeClass("video-modal__overlay--visible");
    modalDialog.removeClass("video-modal__dialog--visible");
  }

  // mobile menu
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Клик по кнопке меню");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom_visible");
    // $(".navbar-bottom").toggleClass('navbar-bottom_visible');
  });

  

});