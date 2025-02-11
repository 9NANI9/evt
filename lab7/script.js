function changeDirection(direction, button) {
    const taskContainer = document.querySelector('.task-container');
    taskContainer.style.display = 'flex'; // Убедитесь, что контейнер использует flexbox
    taskContainer.style.flexDirection = direction; // Меняем направление

    // Убираем класс active от всех кнопок
    const buttons = document.querySelectorAll('.controller-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Добавляем класс active к нажатой кнопке
    button.classList.add('active');
  }