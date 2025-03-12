function changeDirection(direction, button) {
    const taskContainer = document.querySelector('.task-container');
    taskContainer.style.display = 'grid'; 
    taskContainer.style.gridTemplateColumns = direction; 


    const buttons = document.querySelectorAll('.controller-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    button.classList.add('active');
  }