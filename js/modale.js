document.addEventListener("DOMContentLoaded", e => {
    // Modal windows of the movies on the home page
  
  });
  
  document.addEventListener("DOMContentLoaded", e => {
    console.log(navigator.userAgent);
  
    let el, modal, closed, open_modal;
  
    el = document.querySelectorAll(".modal-grid li");
    modal = document.querySelector(".bc-modal");
    frModal = document.querySelector(".fr-modal");
    closed = document.querySelector(".close");
  
    open_modal = function () {
      console.log(this.dataset.picture);
  
      let picture = this.dataset.picture;
      modal.classList.add("modale-active"); /* ajouter la classe active */
      frModal.classList.add("modale-active"); /* ajouter la classe active */
      /* sélectionner les sélecteurs html*/
      document.querySelector(".fr-modal img").src = picture;

    };
    for (rows of el) {
      rows.addEventListener("click", open_modal);
    }
    closed.addEventListener("click", () => {
      modal.classList.remove("modale-active");
      frModal.classList.remove("modale-active");
      document.querySelector(".fr-modal img").src = "";
    });
  });