
const todo = [
    id = 2,
    title = "My List",
    priority = 4,
    createdAt = "Sunday",
    done = "yes",
    doneAt = "Monday",
];

app.create ('/todo/', (req, res) => {
    const todos = req.body;
    todos.push(todo);
    res.send("List of tasks" + todos);
})