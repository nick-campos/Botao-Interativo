'use strict' //Evitar erros comuns em JavaScript e torna o código mais seguro//

const switcher = document.querySelector('.btn'); //O código procura um botão no HTML que tenha a classe .btn//

if(!document.body.classList.contains('dark-theme')) { /*Se o body não tiver a classe "dark-theme", o código adiciona a classe "light-theme" 
isso garante que ao abrir o site pela primeira vez, ele comece no modo claro*/
    document.body.classList.add('light-theme');
}

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme'); //Toggle adiciona ou remove a classe dark theme ou light theme//
    document.body.classList.toggle('light-theme');

    if(document.body.classList.contains('dark-theme')) {
        switcher.textContent = 'Light'; //É uma forma de mudar o texto do botão dinamicamente//
    } else {
        this.textContent = 'Dark'; 
    }

    console.log('current class on body: ' + document.body.className); //Imprime no console do navegador a classe atual do body//
});