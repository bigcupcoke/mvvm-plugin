class Movie extends Widget {
    constructor(options) {
        super()
        this._options = options
        this.body = this.options.el
        this.components = {}
        this.render()
        this.bindEvents()
    }

    bindEvents() {
        this.body.on()
    }
}