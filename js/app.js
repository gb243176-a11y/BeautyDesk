// ===============================
// BeautyDesk - app.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Rolagem suave dos links do menu
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(e){

            const destino = document.querySelector(this.getAttribute("href"));

            if(destino){

                e.preventDefault();

                destino.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    // Animação dos cards
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0)";

            }

        });

    });

    cards.forEach(card=>{

        card.style.opacity="0";

        card.style.transform="translateY(40px)";

        card.style.transition=".6s";

        observer.observe(card);

    });

});
