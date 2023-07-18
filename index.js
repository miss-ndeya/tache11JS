//  selectionner les elements du HTML
const input = document.querySelector('#input');
let btnAjouter = document.querySelector('#btnAjouter');
const liste = document.querySelector('ul');
console.log(input);

// fonction click sur le bouton ajouter
btnAjouter.addEventListener('click', listeTache);


function listeTache() {
    // creation element HTML
    let valeurInput = input.value
    let li = document.createElement('li');
    let todo = document.createElement('button');
    let todoing = document.createElement('button');
    let todone = document.createElement('button');

    // Affichage elements
    li.innerHTML = `${valeurInput}`;
    todo.innerHTML= "to do";
    todoing.innerHTML= "to doing";
    todone.innerHTML= "to done";
    li.appendChild(todo);
    li.appendChild(todoing);
    li.appendChild(todone);
    liste.appendChild(li); 

    // reinitialiser le champ de saisi
    input.value = "";

    // styliser la tache
    li.classList = "mb-4 nav-link py-2 text-end"
    todo.classList = "btn btn-danger mx-3"
    todoing.classList = "btn btn-warning mx-3"
    todone.classList = "btn btn-success mx-3"

    // fonction pour changer le bg de todo
    todo.addEventListener("click", () =>  {
        li.style.backgroundColor = "#dc3545";
    })
    // fonction pour changer le bg de todoing
    todoing.addEventListener("click", () =>  {
        li.style.backgroundColor = "#ffc107";
    })
    // fonction pour changer le bg de todone
    todone.addEventListener("click", () =>  {
        li.style.backgroundColor = "#198754";
    })

  

}