// =================================
// BeautyDesk - Cadastro
// =================================


const cadastroForm = document.getElementById("cadastroForm");



cadastroForm.addEventListener("submit",(e)=>{


    e.preventDefault();



    const usuario = {


        nome:

        document.getElementById("nome").value,



        email:

        document.getElementById("email").value,



        senha:

        document.getElementById("senha").value


    };



    localStorage.setItem(

        "beautydesk_usuario",

        JSON.stringify(usuario)

    );



    alert(

        "Cadastro realizado com sucesso!"

    );



    window.location.href="login.html";



});
