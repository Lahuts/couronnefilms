document.addEventListener("DOMContentLoaded", e => {
    for(i=1;i<21;i++){
        document.querySelector(".modal-grid").innerHTML +=
        `<li data-picture="asset/galerie/photo/jpeg/${i}.jpeg"><img src="asset/galerie/photo/jpeg/${i}.jpeg" alt="Photo de Marriage"></li>`;      
    }
  
})
