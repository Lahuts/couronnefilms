document.addEventListener("DOMContentLoaded",e =>{
    // Email sending
    let send = document.getElementById("send").addEventListener("click",()=>{
        this.disabled = true;
        let prenom = document.getElementById("prenom").value;
        let name = document.getElementById("nom").value;
        let tel = document.getElementById("phone").value;
        let mail = document.getElementById("email").value;
        let msg = document.getElementById("message").value;
        if(name != "" && mail != "" && msg != ""){
          //send
          Email.send({
            SecureToken : "ee557e5b-e127-4218-ade5-e6fbb13db612",
            To : 'contact@couronnefilms.com',
            From : "lahuts.ptf@gmail.com",
            Subject : "Message CouronneFilms - "+prenom+","+ name+" - "+mail,
            Body :`Infos :
            Prenom : ${prenom} <br>
            Nom : ${name} <br>
            Telephone : ${tel} <br>
            Mail : ${mail}<br>
            Message : ${msg}
            `
        }).then(
          message => alert(message)
        );
        }else{
          alert("Veuillez remplir les champs")
        }
      })

})