// =================================
// BeautyDesk - Perfil do Cliente
// =================================



document.addEventListener("DOMContentLoaded",()=>{



// Dados de exemplo do cliente

const cliente = {


nome:"Maria Silva",


telefone:"(00) 00000-0000",


email:"cliente@email.com",


ultimaVisita:"10/08/2026",


servicos:5,


total:"R$ 350,00"



};





// Atualizar informações



const nome = document.getElementById(
"nomeCliente"
);


if(nome){

nome.innerText = cliente.nome;

}





const telefone = document.getElementById(
"telefoneCliente"
);


if(telefone){

telefone.innerText = cliente.telefone;

}





const email = document.getElementById(
"emailCliente"
);


if(email){

email.innerText = cliente.email;

}





const visita = document.getElementById(
"ultimaVisita"
);


if(visita){

visita.innerText = cliente.ultimaVisita;

}





const servicos = document.getElementById(
"totalServicos"
);


if(servicos){

servicos.innerText = cliente.servicos + " serviços";

}





const gasto = document.getElementById(
"totalGasto"
);


if(gasto){

gasto.innerText = cliente.total;

}




});
