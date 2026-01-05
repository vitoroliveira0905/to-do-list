const form = document.getElementById('task-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    addTask(taskInput.value, taskList);
    taskInput.value = "";
}
)

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
