const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
});

function toggleComplete(id) {
  tasks = tasks.map(task => 
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';

    const span = document.createElement('span');
    span.textContent = task.text;
    span.style.cursor = 'pointer';
    span.onclick = () => toggleComplete(task.id);

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '🗑️';
    delBtn.onclick = () => deleteTask(task.id);

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}
