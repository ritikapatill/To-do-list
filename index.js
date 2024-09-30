// script.js

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
      const taskList = document.getElementById('task-list');
      
      
      const newTask = document.createElement('li');
      newTask.innerHTML = `
        <span>${taskText}</span>
        <div>
          <button class="edit" onclick="editTask(this)">Edit</button>
          <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
      `;
      
      taskList.appendChild(newTask);
      
      // Clear input field
      taskInput.value = '';
    }else{
        alert("Please enter something")
    }
  }
  
  // Function to delete a task
  function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
  }
  
  // Function to edit a task
  function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskSpan = taskItem.querySelector('span');
    const newTask = prompt('Edit Task:', taskSpan.textContent);
    
    if (newTask !== null && newTask.trim() !== '') {
      taskSpan.textContent = newTask.trim();
    }
  }
  