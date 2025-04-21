let tasks = [];

function addTask() {
  const nameInput = document.getElementById('taskName');
  const priorityInput = document.getElementById('taskPriority');

  const name = nameInput.value.trim();
  const priority = parseInt(priorityInput.value);

  if (!name || isNaN(priority)) {
    alert('Please enter both a task and a valid priority number.');
    return;
  }

  // Create a task object
  const task = { name, priority };
  tasks.push(task);

  // Sort by priority (lower number = higher priority)
  tasks.sort((a, b) => a.priority - b.priority);

  // Display the tasks
  displayTasks();

  // Clear input fields
  nameInput.value = '';
  priorityInput.value = '';
}

function displayTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerText = `${task.name} (Priority: ${task.priority})`;
    li.classList.add('list-group-item');
    list.appendChild(li);
  });
}
