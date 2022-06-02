document.addEventListener("DOMContentLoaded", e => {
    for(i=1;i<13;i++){
        document.querySelector(".modal-grid").innerHTML +=
        `<li><img src="asset/galerie/photo/${i}.jpeg" alt="Photo de Marriage"></li>`;      
    }
    for(i=2;i<8;i++){
        document.querySelector(".modal-grid").innerHTML +=
        `<li><img src="asset/galerie/photo/${i}.jpg" alt="Photo de Marriage"></li>`;      
    }
})
