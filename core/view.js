class View {
    constructor() {
        this.app = document.getElementById("app")
    }

    render(html_path, script_source) {
        fetch(html_path).then(res => res.text()).then(html => {
            this.app.innerHTML = html
        })
        
        const script = document.createElement("script")
        script.src = script_source
        document.body.appendChild(script)
    }
}
