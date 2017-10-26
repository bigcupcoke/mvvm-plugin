const log = console.log.bind(console)
// 全局事件分发

// pub/sub 事件分发模式

class Widget {
    constructor() {
        // 事件处理程序， 放到一个对象中
        this.handlers = {}
    }

    // 返回一个单例
    // 全局环境中 如果单例存在则返回， 不存在则 new 一个新的然后返回
    static single() {

        return this.instance || (new this())
    }
    // 绑定事件
    add(type, handler) {
        if (typeof  this.handlers[type] === 'undefined' || this.handlers[type] === null) {
            this.handlers[type] = []
        }
        // type 加入自定义事件类型
        this.handlers[type].push(handler)
        return this
    }

    // 触发事件
    fire(...args) {
        // 第一个参数一定是 事件类型, rest是传入事件的参数
        const [type, ...rest] = args
        const handlers = this.handlers[type]
        // 确保是数组, 该 type类型事件已经被绑定上了事件
        if (Array.isArray(handlers)) {
            handlers.forEach((k) => {
                let func = k
                func.apply(this, rest)
            })
        }
        return this
    }

    // 移除 事件的绑定
    remove(type) {
        // 传入 type 移除该 type 对应的 handlers
        // 不传参数， 移除所有的 handlers
        if (type !== undefined) {
            this.handlers[type] = null
        } else {
            this.handlers = null
        }
        return this
    }

    destroy() {
        if (Object.keys(this.handlers).length > 0) {
            this.fire('destroyed')
        }
        this.handlers = null
    }
}

const test = () => {
    const w = new Widget()
    const eventType = 'message'

    w.add(eventType, () => {
        log('this is  message event 0')
    })

    w.add(eventType, () => {
        log('this is  message event 1')
    })

    w.fire(eventType)
    w.remove(eventType)

    w.add(eventType, (args) => {
        log('this is  message event 2' + args)
    })

    w.fire(eventType, 'args test')
}

if (require.main === module) {
    test()
}