let angle = document.querySelector('.fa-angle-down');

let div = document.querySelector('.hidden');


function Open () {
    if (div.style.display === 'none'){
        div.style.display = 'flex';
    } else div.style.display = 'none'
}

function Enviar () {
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let object = {name: name, email: email};
    let storage = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    if (name.value.length < 5 ){
        window.alert('Favor digite seu nome e sobrenome');
    } else if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1){
        window.alert('Digite um Email válido');
    } else {
        storage.push(object)
        localStorage.setItem('list', JSON.stringify(storage));
        console.log(storage);
        name.value = '';
        email.value = '';
    }
}
