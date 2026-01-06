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
    if (!label.classList.contains('checked')) {
        label.classList.add('checked')
    }
    else {
        label.classList.remove('checked')
    }

})

taskList.addEventListener('click', e => {
    const deleteButton = e.target.closest('.delete')
    if(deleteButton){
        removeTask(deleteButton.closest('li'));
    }
})

function addTask(task, taskList) {
    const li = document.createElement('li');   
    taskList.appendChild(li);
    li.innerHTML = `<div class="left">
    <input type="checkbox">
    <label >${task}</label>
</div>
<div class="right">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x delete">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>

</div>`
}

function removeTask(task){
    task.remove();
}