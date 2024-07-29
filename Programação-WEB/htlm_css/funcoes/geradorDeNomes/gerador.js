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

function gerar() {
    //pegando o valor do campo select

    var item = document.getElementById("tiposNome");
    var itemSelecionado = item.options[item.selectedIndex];

    //

    if (itemSelecionado.value == 'Games') {
        var games = ['TheWretchedDefiant', 
            'VanDefiant', 
            'Defiantlay', 
            'Borecan', 
            'Chiade', 
            'Rilis', 
            'Ciramma', 
            'Ibur', 
            'Kedaven', 
            'Astilidon', 
            'Gilamwen', 
            'Ethetram', 
            'Chealith', 
            'Alilikor', 
            'Aendacien', 
            'Afendahar', 
            'Kailasien', 
            'Keditha', 
            'Etiwiel', 
            'Ibovudd', 
            'Troini', 
            'Jilikor', 
            'Galoeswen', 
            'Ocerap', 
            'Cielian', 
            'Glerinydd'];
        var gerarAleatorio = games[Math.floor(games.length * Math.random())];
        resultado.value = gerarAleatorio;

    } else if (itemSelecionado.value == 'Fantasia') {
        var fantasia = ['Barbeorth',
            'Iseni',
            'Tri',
            'Eadan',
            'Terron',
            'Ricferd',
            'Anwald',
            'Thye',
            'Cyntri',
            'Ciaven',
            'Lett',
            'Donlespher',
            'Pa',
            'Freawil',
            'Menard',
            'Johnmar',
            'Canso',
            'Forthchel',
            'Dicson',
            'Rawerdfled'];

        var gerarAleatorio = fantasia[Math.floor(fantasia.length * Math.random())];
        resultado.value = gerarAleatorio;
    } else if (itemSelecionado.value == 'Elfos') {
        var elfos = ['Gilion',
            'Dar',
            'Aznas',
            'Sharor',
            'Lasmoril',
            'Las',
            'Dhelto',
            'Maramal',
            'Iltor',
            'Uildis',
            'Khandol',
            'Rornar',
            'Thirnar',
            'Weaeg',
            'Dargo',
            'Uilasduil',
            'Juszen',
            'Thanim',
            'Rindris',
            'Amarles'];

        var gerarAleatorio = elfos[Math.floor(elfos.length * Math.random())];
        resultado.value = gerarAleatorio;
    } else if (itemSelecionado.value == 'Asiaticos') {
        var asiaticos = ['Gishi',
            'Kungu',
            'Yeungma',
            'Chung',
            'Shobo',
            'Mochang',
            'Thailei',
            'Yaochan',
            'Hwangpo',
            'Niwenlei',
            'Longdeo',
            'Shichung',
            'Sahwang',
            'Leichen',
            'Poping',
            'Kyoga',
            'Leega',
            'Tsairu',
            'Shise']

        var gerarAleatorio = asiaticos[Math.floor(asiaticos.length * Math.random())];
        resultado.value = gerarAleatorio;
    }




}