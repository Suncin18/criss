const iNombre = document.getElementById("iNombre");
const iCorreo = document.getElementById("iCorreo");
const iAsunto = document.getElementById("iAsunto");
const iTelefono = document.getElementById("iTelefono");
const iMensaje = document.getElementById("iMensaje");
const btnContactForm = document.getElementById('btn-contactForm');

btnContactForm.addEventListener("click", ()=>{
    if(iNombre.value != "" && iCorreo.value != "" && iAsunto.value != "" && iTelefono.value != "" && iMensaje.value != ""){
        Swal.fire(
            'Gracias!',
            'Responderemos tu mensaje pronto!',
            'success'
        ).then(() => {
            iNombre.value = ""
            iCorreo.value = ""
            iAsunto.value = ""
            iTelefono.value = ""
            iMensaje.value = ""
        })
    }else{
        Swal.fire({
            title: 'Oops!',
            text: "Llena todos los campos primero!",
            icon: 'warning'
        })
    }
});