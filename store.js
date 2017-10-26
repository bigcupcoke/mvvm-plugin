// 增删改查, 全局事件分发
class Store extends Widget {
    constructor() {
        super()

        // 存储页面的信息
        this.data = {}
    }

    fireEvents(key) {
        let event = eventMapper[key]
        let value = this.find(key)
        if(event) {
            this.fire(event, args)
        }
    }


    add(key, value) {
        if (!this.data[key]) {
            this.data[key] = []
        }

        this.data[key].push(value)
        this.fireEvents(key)
    }

    clear(key) {
        delete this.data[key]
        this.fireEvents(key)
    }

    set(key, value) {
        this.data[key] = value
        this.fireEvents(key)
    }

    find(key) {
        if (key in this.data) {
            return this.data[key]
        } else {
            return []
        }
    }
}