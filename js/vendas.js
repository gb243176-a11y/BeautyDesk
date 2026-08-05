// =================================
// BeautyDesk - Página de Vendas
// =================================


// Botão de assinatura

const botaoAssinar = document.querySelector(".price-card button");



if(botaoAssinar){


    botaoAssinar.addEventListener("click",()=>{


        alert(
            "Obrigado pelo interesse no BeautyDesk! Em breve você será direcionado para o pagamento."
        );


    });


}




// Animação dos cards

const elementos = document.querySelectorAll(
    ".card, .price-card, .hero-card"
);



elementos.forEach((elemento)=>{


    elemento.style.opacity = "0";

    elemento.style.transform = "translateY(30px)";



});




window.addEventListener("scroll",()=>{


    elementos.forEach((elemento)=>{


        const posicao = elemento.getBoundingClientRect().top;


        const alturaTela = window.innerHeight;



        if(posicao < alturaTela - 100){


            elemento.style.transition = "0.6s";

            elemento.style.opacity = "1";

            elemento.style.transform = "translateY(0)";


        }


    });


});
