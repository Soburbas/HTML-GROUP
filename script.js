document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`${savedTheme}-theme`);
    updateThemeButtonText(savedTheme);
    updateTaskStats();
});

function toggleTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    document.body.classList.toggle('dark-theme', !isDark);
    document.body.classList.toggle('light-theme', isDark);
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    updateThemeButtonText(newTheme);
}

function updateThemeButtonText(theme) {
    const button = document.getElementById('themeButton');
    if (button) {
        button.textContent = theme === 'dark' ? '🌙 Тёмная тема' : '🌞 Светлая тема';
    }
}



function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
        updateTaskStats();
    });

    taskList.appendChild(li);
    taskInput.value = "";

    updateTaskStats();
}

function updateTaskStats() {
    const totalSpan = document.getElementById("totalTasks");
    const completedSpan = document.getElementById("completedTasks");

    const tasks = document.querySelectorAll("#taskList li");
    const completedTasks = document.querySelectorAll("#taskList li.completed");

    totalSpan.textContent = tasks.length;
    completedSpan.textContent = completedTasks.length;
}
