let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskList = document.getElementById('task-list');

function createListInnerHTML(li) {
    li.innerHTML = `<div class="left">
    <input type="checkbox">
    <label></label>
</div>
<div class="right">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x delete">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>

</div>`
}

tasks.forEach(task => {
    const li = document.createElement('li');
    taskList.appendChild(li);
    li.id = `task-${task.id}`;
    createListInnerHTML(li);
    li.querySelector('label').textContent = task.label;
    if (task.checked) {
        li.querySelector('input').checked = true
        li.querySelector('label').classList.add('checked');
    }
});


const form = document.getElementById('task-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');

    addTask(taskInput.value, taskList);
    taskInput.value = "";
}
)

taskList.addEventListener('change', (e) => {
    const checkbox = e.target;
    const idTask = Number(checkbox.closest('li').id.slice(5));
    console.log(idTask)
    const task = tasks.find(task => task.id === idTask)
    const label = checkbox.parentElement.querySelector('label')
    if (!label.classList.contains('checked')) {
        label.classList.add('checked')
        task.checked = true
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    else {
        label.classList.remove('checked')
        task.checked = false
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

})

taskList.addEventListener('click', e => {
    const deleteButton = e.target.closest('.delete')
    if (deleteButton) {
        removeTask(deleteButton.closest('li'));
    }
})

function addTask(task, taskList) {
    const li = document.createElement('li');
    taskList.appendChild(li);
    const idTask = tasks.length === 0 ? 1 : tasks.at(-1).id + 1;
    li.id = `task-${idTask}`
    createListInnerHTML(li);
    li.querySelector('label').textContent = task;
    tasks.push({ id: idTask, label: task, checked: false })
    console.log(tasks)
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function removeTask(task) {
    task.remove();
    tasks = tasks.filter(item => item.id !== Number(task.id.slice(5)))
    localStorage.setItem("tasks", JSON.stringify(tasks))
}