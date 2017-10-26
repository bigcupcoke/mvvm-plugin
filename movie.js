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
        this.body.on('click', 'a', (e) => {
            e.preventDefault()
            let self = $(this)
            let val = self.closet('a').find('span').text()
            let singleStore =this.options.store.single()
            // 数据存到 store 中去， 方便其它地方去使用
            singleStore.add('item', value)
            // 触发 item 事件
            this.components['item'].fire('item')
        })
    }

    render() {
        this.renderItems()
    }

    renderItems() {
        // movie的数据
        let movies = this.options.data
        const ms = movies.map((m) => {
            let cover = m.cover
            let title = m.title
            let score = m.rate
            let s = (`
                <li>
                    <a href="">
                        <div>
                            <img src="${cover}" alt="${title}">
                        </div>
                        <p>
                            <span>${title}</span>
                            <strong>${score}</strong>
                        </p>
                    </a>
                </li>
             `)
            return s
        }).join('')
        const t = `
         <ul class="movie-list">
                ${ms}
            </ul>
        `
        const container = this.options.el
        container.append(t)
        this.components['item'] = new Tooltip(this.options)
    }
}