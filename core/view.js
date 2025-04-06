class View {
    constructor() {
        this.app = document.getElementById("app")
    }

    render(html_path) {
        fetch(html_path).then(res => res.text()).then(html => {
            this.app.innerHTML = html
        })
    }
}
