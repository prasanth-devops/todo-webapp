const taskList = document.getElementById('task-list');

fetch('/tasks')
    .then(res => res.json())
    .then(tasks => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${task} <form style="display:inline;" action="/delete" method="POST"><input type="hidden" name="index" value="${index}"><button type="submit">Delete</button></form>`;
            taskList.appendChild(li);
        });
    });

