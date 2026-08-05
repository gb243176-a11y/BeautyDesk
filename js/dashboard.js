// =================================
// BeautyDesk - Dashboard
// =================================

document.addEventListener("DOMContentLoaded", () => {


    // Animação dos cards

    const cards = document.querySelectorAll(".card");


    cards.forEach((card,index)=>{


        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";


        setTimeout(()=>{


            card.style.transition = "0.5s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";


        }, index * 200);


    });



    // Carregar quantidade de clientes salva

    const totalClientes = document.getElementById("totalClientes");


    const clientes = JSON.parse(

        localStorage.getItem("beautydesk_clientes")

    ) || [];



    if(totalClientes){

        totalClientes.innerText = clientes.length;

    }



});
