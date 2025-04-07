const model = new Task()
const view = new View()

const routes = [
    {
        uri: "home",
        html_path: "view/home.html",
        script_source: "",
    },
    {
        uri: "task1",
        html_path: "view/task1.html",
        script_source: "./view/task1.js",
    },
    {
        uri: "task2",
        html_path: "view/task2.html",
        script_source: "./view/task2.js",
    },
    {
        uri: "task3",
        html_path: "view/task3.html",
        script_source: "./view/task3.js",
    },
]

const taskController = new Controller(model, view, routes)
