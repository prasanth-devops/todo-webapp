const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8086;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = req.body.task;
    if(task) tasks.push(task);
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const index = parseInt(req.body.index);
    if(!isNaN(index)) tasks.splice(index, 1);
    res.redirect('/');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
