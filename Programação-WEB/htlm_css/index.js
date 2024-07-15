/*let inputValor1 = document.getElementById("valor1");
inputValor1.addEventListener('mouseover',function(){
    alert("olá");
});//SPAN BOX AO MOUSEOVER(PASSAR O MOUSE) NO CAMPO VALOR1

function somar(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let resultado = parseFloat(valor1)+parseFloat(valor2);
    document.getElementById("resultado").innerText=resultado;
}
*/
document.addEventListener('DOMContentLoaded',()=>{
    verificarTema();
})

function alterarTema(){
    const tema = document.body.getAttribute("data-tema");
    const novoTema = tema == 'dark' ? 'light' : 'dark';
    document.body.setAttribute("data-tema", novoTema);
    localStorage.setItem('tema', novoTema);
}
function verificarTema(){
    const temaArmazenado = localStorage.getItem('tema');
    if(temaArmazenado){
        document.body.setAttribute('data-tema', temaArmazenado);
    }
}

function copiar(){
    const curriculo = document.getElementById("Contato").textContent;
    const mostrarCurriculo = document.getElementById("Contato");
    mostrarCurriculo.innerHTML='';
    mostrarCurriculo.appendChild('16991951038');
    navigator.clipboard.writeText(curriculo).then(()=>{
        alert("Conteúdo copiado para a área de tranferência")
    }).catch(error=>{
        console.error("erro ao copiar", error);
        alert("Erro ao copiar o conteúdo");
    })
}

