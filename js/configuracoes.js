// =================================
// BeautyDesk - Configurações
// =================================



const configForm = document.getElementById("configForm");




// Carregar configurações salvas

document.addEventListener("DOMContentLoaded",()=>{


    const configuracao = JSON.parse(

        localStorage.getItem("beautydesk_config")

    );



    if(configuracao){


        document.getElementById("nomeSalao").value =
        configuracao.nome || "";



        document.getElementById("telefoneSalao").value =
        configuracao.telefone || "";



        document.getElementById("emailSalao").value =
        configuracao.email || "";



        document.getElementById("notificacoes").checked =
        configuracao.notificacoes || false;


    }


});





// Salvar configurações

if(configForm){


configForm.addEventListener("submit",(e)=>{


    e.preventDefault();




    const configuracao = {


        nome:

        document.getElementById("nomeSalao").value,



        telefone:

        document.getElementById("telefoneSalao").value,



        email:

        document.getElementById("emailSalao").value,



        notificacoes:

        document.getElementById("notificacoes").checked



    };





    localStorage.setItem(

        "beautydesk_config",

        JSON.stringify(configuracao)

    );





    alert(

        "Configurações salvas com sucesso!"

    );



});


}
