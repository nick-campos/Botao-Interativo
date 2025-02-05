'use strict'

const switcher = document.querySelector('.btn');

if(!document.body.classList.contains('dark-theme')) {
    document.body.classList.add('light-theme');
}

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    if(document.body.classList.contains('dark-theme')) {
        switcher.textContent = 'Light';
    } else {
        this.textContent = 'Dark';
    }

    console.log('current class on body: ' + document.body.className);
});