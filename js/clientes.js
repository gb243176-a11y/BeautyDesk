// =================================
// BeautyDesk - Clientes
// =================================

const clienteForm = document.getElementById("clienteForm");

const listaClientes = document.getElementById("listaClientes");


// Carregar clientes salvos

let clientes = JSON.parse(

    localStorage.getItem("beautydesk_clientes")

) || [];



// Mostrar clientes na tabela

function mostrarClientes(){


    listaClientes.innerHTML = "";


    clientes.forEach((cliente)=>{


        listaClientes.innerHTML += `

        <tr>

            <td>${cliente.nome}</td>

            <td>${cliente.telefone}</td>

            <td>${cliente.email}</td>

        </tr>

        `;


    });


}



// Cadastrar cliente

clienteForm.addEventListener("submit",(e)=>{


    e.preventDefault();



    const novoCliente = {


        nome:
        document.getElementById("nome").value,


        telefone:
        document.getElementById("telefone").value,


        email:
        document.getElementById("email").value


    };



    clientes.push(novoCliente);



    localStorage.setItem(

        "beautydesk_clientes",

        JSON.stringify(clientes)

    );



    clienteForm.reset();



    mostrarClientes();


});



// Carregar lista ao abrir página

mostrarClientes();
