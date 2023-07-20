// selectionner les elements html
let input = document.getElementById('input');
let btnAjouter = document.getElementById('btnAjouter');
let liste = document.getElementById('liste');

// fonction clic sur le bouton
btnAjouter.addEventListener('click', listeTache);

// fonction liste de tache
function listeTache() {
    let valeur = input.value;
    if (valeur === '') {
        alert('Veuillez saisir une tache a faire');
    } else {
        liste.innerHTML += `<div class="d-flex my-3 p-2 align-items-center justify-content-around ">
        ${valeur}
        <button class="btn btn-danger" onclick="Todo(event)">todo</button>
        <button class="btn btn-warning" onclick="Doing(event)">doing</button>
        <button class="btn btn-success" onclick="Done(event)">done</button>
        </div>`
        input.value = '';
    }
}

// fonction pour change le bg de la tache en rouge au click du bouton todo

function Todo(event) {
    event.target.parentNode.style.backgroundColor = '#dc3545'
    event.target.parentNode.style.color = '#fff'
}

// fonction pour change le bg de la tache en orange au click du bouton doing
function Doing(event) {
    event.target.parentNode.style.backgroundColor = '#ffc107'
    event.target.parentNode.style.color = '#000'
}

// fonction pour change le bg de la tache en vert au click du bouton done
function Done(event) {
    event.target.parentNode.style.backgroundColor = '#198754'
    event.target.parentNode.style.color = '#fff'
}