// =================================
// BeautyDesk - Dashboard
// =================================

document.addEventListener("DOMContentLoaded",()=>{


    // Animação dos cards

    const cards = document.querySelectorAll(".card");


    cards.forEach((card,index)=>{


        card.style.opacity="0";

        card.style.transform="translateY(30px)";


        setTimeout(()=>{


            card.style.transition=".5s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";


        }, index * 200);


    });



    // Total de clientes

    const clientes = JSON.parse(

        localStorage.getItem("beautydesk_clientes")

    ) || [];



    const totalClientes = document.getElementById("totalClientes");


    if(totalClientes){

        totalClientes.innerText = clientes.length;

    }




    // Total de agendamentos

    const agenda = JSON.parse(

        localStorage.getItem("beautydesk_agenda")

    ) || [];



    const totalAgenda = document.querySelectorAll(".card strong")[1];


    if(totalAgenda){

        totalAgenda.innerText = agenda.length;

    }




    // Total financeiro

    const pagamentos = JSON.parse(

        localStorage.getItem("beautydesk_financeiro")

    ) || [];



    let total = 0;



    pagamentos.forEach((item)=>{


        total += Number(item.valor);


    });



    const totalFinanceiro = document.querySelectorAll(".card strong")[2];



    if(totalFinanceiro){

        totalFinanceiro.innerText =

        "R$ " + total.toFixed(2);

    }



});
