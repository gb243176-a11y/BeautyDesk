// =================================
// BeautyDesk - Financeiro
// =================================

const financeiroForm = document.getElementById("financeiroForm");

const listaFinanceiro = document.getElementById("listaFinanceiro");

const totalRecebido = document.getElementById("totalRecebido");

const totalVendas = document.getElementById("totalVendas");


// Carregar pagamentos

let pagamentos = JSON.parse(

    localStorage.getItem("beautydesk_financeiro")

) || [];




// Atualizar informações

function atualizarFinanceiro(){


    listaFinanceiro.innerHTML = "";


    let total = 0;



    pagamentos.forEach((pagamento)=>{


        total += Number(pagamento.valor);



        listaFinanceiro.innerHTML += `

        <tr>

            <td>${pagamento.cliente}</td>

            <td>R$ ${Number(pagamento.valor).toFixed(2)}</td>

        </tr>

        `;


    });



    totalRecebido.innerText =

        "R$ " + total.toFixed(2);



    totalVendas.innerText =

        pagamentos.length;



}



// Registrar pagamento

financeiroForm.addEventListener("submit",(e)=>{


    e.preventDefault();



    const novoPagamento = {


        cliente:

        document.getElementById("clientePagamento").value,



        valor:

        document.getElementById("valorPagamento").value


    };



    pagamentos.push(novoPagamento);



    localStorage.setItem(

        "beautydesk_financeiro",

        JSON.stringify(pagamentos)

    );



    financeiroForm.reset();



    atualizarFinanceiro();


});




// Carregar ao abrir página

atualizarFinanceiro();
