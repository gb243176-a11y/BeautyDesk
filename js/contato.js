// =================================
// BeautyDesk - Contato
// =================================


const contatoForm = document.getElementById("contatoForm");



if(contatoForm){


    contatoForm.addEventListener("submit",(e)=>{


        e.preventDefault();



        const nome = document.getElementById("nomeContato").value;

        const email = document.getElementById("emailContato").value;

        const mensagem = document.getElementById("mensagemContato").value;




        const contato = {


            nome:nome,

            email:email,

            mensagem:mensagem,

            data:new Date().toLocaleDateString()


        };




        let mensagens = JSON.parse(

            localStorage.getItem("beautydesk_contatos")

        ) || [];




        mensagens.push(contato);



        localStorage.setItem(

            "beautydesk_contatos",

            JSON.stringify(mensagens)

        );



        alert(

            "Mensagem enviada com sucesso! Entraremos em contato."

        );



        contatoForm.reset();



    });


}
