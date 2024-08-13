
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', deleteTask);

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskItem.addEventListener('click', toggleTaskCompletion);
        
        taskInput.value = '';
    }

    function deleteTask(e) {
        e.stopPropagation();
        const taskItem = e.target.parentNode;
        taskList.removeChild(taskItem);
    }

    function toggleTaskCompletion(e) {
        e.target.classList.toggle('task-completed');
    }
});
