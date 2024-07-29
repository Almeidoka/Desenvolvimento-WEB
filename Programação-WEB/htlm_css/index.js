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

function copiarWhatsApp(){
    const txt_curriculo = '16991951038';
    navigator.clipboard.writeText(txt_curriculo).then(() => {
        alert("Conteúdo copiado para a área de tranferência")
    }).catch(error => {
        console.error("erro ao copiar", error);
        alert("Erro ao copiar o conteúdo");
    })
}

function copiarEmail() {
    const txt_curriculo = 'gustavofederalgg@gmail.com';
    navigator.clipboard.writeText(txt_curriculo).then(() => {
        alert("Conteúdo copiado para a área de tranferência")
    }).catch(error => {
        console.error("erro ao copiar", error);
        alert("Erro ao copiar o conteúdo");
    })
}
