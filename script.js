const botao = document.getElementById("abrirCarta");
const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");
const musica = document.getElementById("musica");

botao.addEventListener("click", () => {

    // Esconde a tela inicial
    inicio.style.display = "none";

    // Mostra a carta
    carta.classList.remove("escondida");

    // Tenta iniciar a música
    musica.play().catch(() => {
        console.log("O navegador bloqueou a reprodução.");
    });

});