var initMovie = (data) => {
    const options = {
        el: $('.wrapper'),
        data: data,
        store: Store,
        components: Tooltip,
    }

    // 初始化一个movie实例
    new Movie(options)
}


var __main = () => {
    initMovie(r.data)
}

$(document).ready(() => {
    __main()
})