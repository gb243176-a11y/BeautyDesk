// =================================
// BeautyDesk - Relatórios
// =================================



document.addEventListener("DOMContentLoaded",()=>{



// Buscar clientes

const clientes = JSON.parse(

localStorage.getItem("beautydesk_clientes")

) || [];




// Buscar agendamentos

const agendamentos = JSON.parse(

localStorage.getItem("beautydesk_agenda")

) || [];




// Buscar financeiro

const financeiro = JSON.parse(

localStorage.getItem("beautydesk_financeiro")

) || [];





// Total clientes

const totalClientes = document.getElementById(
"totalClientes"
);



if(totalClientes){

totalClientes.innerText = clientes.length;

}





// Total agendamentos

const totalAgendamentos = document.getElementById(
"totalAgendamentos"
);



if(totalAgendamentos){

totalAgendamentos.innerText = agendamentos.length;

}





// Total faturamento


let valorTotal = 0;



financeiro.forEach((item)=>{


valorTotal += Number(item.valor) || 0;


});





const totalFaturamento = document.getElementById(
"totalFaturamento"
);



if(totalFaturamento){

totalFaturamento.innerText =

"R$ " + valorTotal.toFixed(2);

}





// Tabela


const tabela = document.getElementById(
"relatorioTabela"
);



if(tabela){


tabela.innerHTML = `


<tr>

<td>Clientes cadastrados</td>

<td>${clientes.length}</td>

</tr>



<tr>

<td>Agendamentos</td>

<td>${agendamentos.length}</td>

</tr>



<tr>

<td>Faturamento</td>

<td>R$ ${valorTotal.toFixed(2)}</td>

</tr>


`;

}



});
