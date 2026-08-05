// =================================
// BeautyDesk - Perfil
// =================================

const perfilForm = document.getElementById("perfilForm");

const dadosPerfil = document.getElementById("dadosPerfil");



// Carregar informações salvas

let perfil = JSON.parse(

    localStorage.getItem("beautydesk_perfil")

) || null;




// Mostrar dados

function mostrarPerfil(){


    if(perfil){


        dadosPerfil.innerHTML = `

        <strong>${perfil.nome}</strong><br><br>

        📞 ${perfil.telefone}<br>

        📍 ${perfil.endereco}

        `;


        document.getElementById("nomeSalao").value = perfil.nome;

        document.getElementById("telefoneSalao").value = perfil.telefone;

        document.getElementById("enderecoSalao").value = perfil.endereco;


    }


}



// Salvar perfil

perfilForm.addEventListener("submit",(e)=>{


    e.preventDefault();



    perfil = {


        nome:

        document.getElementById("nomeSalao").value,



        telefone:

        document.getElementById("telefoneSalao").value,



        endereco:

        document.getElementById("enderecoSalao").value


    };



    localStorage.setItem(

        "beautydesk_perfil",

        JSON.stringify(perfil)

    );



    mostrarPerfil();



    alert("Informações salvas com sucesso!");



});




// Carregar ao iniciar

mostrarPerfil();
