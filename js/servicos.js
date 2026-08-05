// =================================
// BeautyDesk - Serviços
// =================================

const servicoForm = document.getElementById("servicoForm");

const listaServicos = document.getElementById("listaServicos");


// Carregar serviços salvos

let servicos = JSON.parse(

    localStorage.getItem("beautydesk_servicos")

) || [];



// Mostrar serviços

function mostrarServicos(){


    listaServicos.innerHTML = "";


    servicos.forEach((servico)=>{


        listaServicos.innerHTML += `

        <tr>

            <td>${servico.nome}</td>

            <td>R$ ${Number(servico.valor).toFixed(2)}</td>

            <td>${servico.duracao} min</td>

        </tr>

        `;


    });


}



// Cadastrar serviço

servicoForm.addEventListener("submit",(e)=>{


    e.preventDefault();



    const novoServico = {


        nome:

        document.getElementById("nomeServico").value,



        valor:

        document.getElementById("valorServico").value,



        duracao:

        document.getElementById("duracaoServico").value


    };



    servicos.push(novoServico);



    localStorage.setItem(

        "beautydesk_servicos",

        JSON.stringify(servicos)

    );



    servicoForm.reset();



    mostrarServicos();


});



// Carregar ao abrir

mostrarServicos();
