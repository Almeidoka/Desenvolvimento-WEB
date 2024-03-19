let inputValor1 = document.getElementById("valor1");
inputValor1.addEventListener('mouseover',function(){
    alert("olá");
});//SPAN BOX AO MOUSEOVER(PASSAR O MOUSE) NO CAMPO VALOR1

function somar(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let resultado = parseFloat(valor1)+parseFloat(valor2);
    document.getElementById("resultado").innerText=resultado;
}
