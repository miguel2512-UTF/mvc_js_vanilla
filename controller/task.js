class Controller {
    constructor(model, view, routes) {
        this.model = model
        this.view = view
        this.routes = 
        this.url = window.location.href
        this.params = new URLSearchParams(window.location.search)
        this.urlPath = this.params.get("path")

        this.initRoutes(model, view, routes)
    }

    initRoutes(model, view, routes) {
        routes.forEach(route => {
            if (this.urlPath == route.uri) {
                this.view.render(route.html_path, route.script_source)
            } else {
                
            }
        });
    }
}
