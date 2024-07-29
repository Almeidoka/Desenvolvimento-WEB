document.addEventListener('DOMContentLoaded', () => {
    verificarTema();

})

function alterarTema() {
    const tema = document.body.getAttribute("data-tema");
    const novoTema = tema == 'dark' ? 'light' : 'dark';
    document.body.setAttribute("data-tema", novoTema);
    localStorage.setItem('tema', novoTema);
}
function verificarTema() {
    const temaArmazenado = localStorage.getItem('tema');
    if (temaArmazenado) {
        document.body.setAttribute('data-tema', temaArmazenado);
    }
}

function somar() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let resultado = parseFloat(valor1) + parseFloat(valor2);
    document.getElementById("resultado").innerText = resultado;
}
