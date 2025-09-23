function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_orztxpe", "template_hv7wwdi",parms).then(alert("Email Sent!!"))
}