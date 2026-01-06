const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    addTask(taskInput.value, taskList);
    taskInput.value = "";
}
)

taskList.addEventListener('change', (e) => {
    const checkbox = e.target;
    const label = checkbox.parentElement.querySelector('label')
    if(!label.classList.contains('checked')){
        label.classList.add('checked')
    }
    else{
        label.classList.remove('checked')
    }

})

function addTask(task, taskList) {

    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    taskList.appendChild(li);

    li.appendChild(input);
    li.appendChild(label)

    input.type = 'checkbox'
    label.innerHTML = task
}