const model = new Task()
const view = new View()

const routes = [
    {
        uri: "task",
        html_path: "view/task.html"
    }
]

const taskController = new Controller(model, view, routes)
