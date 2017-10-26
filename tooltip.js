class Tooltip extends Widget {
    constructor() {
        super()
        this.el = $('.tooltip-wrapper|')
        this.bindEvents()
        this.render()
    }

    bindEvents() {
        let key = 'item'
        let event = eventMapper[key]
        let singleStore = Store.single()
        singleStore.on(event, () => {
            let m = singleStore.find(key)
            this.renderTooltip(m)
        })
    }

    render() {
        this.renderTooltip()
    }

    renderTooltip() {
        let s = JSON.stringify(data)
        this.el.html(s)
    }
}