// =================================
// BeautyDesk - Agenda
// =================================

const agendaForm = document.getElementById("agendaForm");

const listaAgenda = document.getElementById("listaAgenda");


// Carrega agendamentos salvos

let agendamentos = JSON.parse(

    localStorage.getItem("beautydesk_agenda")

) || [];



// Mostrar agendamentos

function mostrarAgenda(){


    listaAgenda.innerHTML = "";


    agendamentos.forEach((item,index)=>{


        listaAgenda.innerHTML += `

        <tr>

            <td>${item.cliente}</td>

            <td>${item.data}</td>

            <td>${item.hora}</td>

            <td>${item.servico}</td>

        </tr>

        `;


    });


}



// Salvar novo agendamento

agendaForm.addEventListener("submit",(e)=>{


    e.preventDefault();



    const novoAgendamento = {


        cliente:
        document.getElementById("cliente").value,


        data:
        document.getElementById("data").value,


        hora:
        document.getElementById("hora").value,


        servico:
        document.getElementById("servico").value


    };



    agendamentos.push(novoAgendamento);



    localStorage.setItem(

        "beautydesk_agenda",

        JSON.stringify(agendamentos)

    );



    agendaForm.reset();



    mostrarAgenda();


});



// Carregar ao abrir página

mostrarAgenda();
