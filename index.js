
//Displaying todays date

let now = new Date();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var day = days[ now.getDay() ];
var month = months[ now.getMonth() ];
var date = now.getDate()
var time = date + ' ' + month + ', ' + day;
document.querySelector("h1").innerHTML=time;


// let todo = [];
const form = document.querySelector('form');
const input = document.querySelector('#user-tasks');
const tasksList = document.querySelector('.tasks-list');

function display(){
  const todo = JSON.parse(localStorage.getItem('tasks'));
  todo.forEach(function(task){
    const maindiv = document.createElement('div');
    maindiv.classList.add('check');

    const checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add('cboxes');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'task';

    const label = document.createElement('label');
    label.textContent = task;
    label.classList.add('label');
    label.style.marginLeft = '5px';

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-danger');
    button.id = 'delete';
    button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
    </svg>`
    button.style.float = 'right';
    button.onclick = function() {
        const pos = todo.indexOf(task);
        console.log(todo);
        console.log(pos);
        let eg = todo.splice(pos, 1);
        localStorage.setItem('tasks',JSON.stringify(todo));
        console.log(eg);
        maindiv.remove();
    };
    checkboxDiv.appendChild(checkbox);
    checkboxDiv.appendChild(label);
    checkboxDiv.appendChild(button);
    maindiv.appendChild(checkboxDiv);
    

    tasksList.appendChild(maindiv);
  })
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let data = input.value;
  if(data.trim()!=='') {
    const todo = JSON.parse(localStorage.getItem('tasks')) || [];
    todo.push(data.trim());
    localStorage.setItem('tasks', JSON.stringify(todo));
    input.value = '';
  }
  display();
})




