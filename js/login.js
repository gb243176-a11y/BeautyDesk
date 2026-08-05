// =======================================
// BeautyDesk - Login
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        if(email === "" || senha === ""){

            alert("Preencha todos os campos.");

            return;

        }

        const botao = form.querySelector("button");

        botao.innerText = "Entrando...";
        botao.disabled = true;

        setTimeout(() => {

            window.location.href = "dashboard.html";

        }, 1000);

    });

});
