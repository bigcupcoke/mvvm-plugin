const ajax = (url, method, form, success, error) => {
    const promise = new Promise((resolve, reject) => {
        const request = {
            url: url,
            method: method,
            contentType: 'application/json',
            success: (r) => {
                if (success) {
                    success(r)
                }
                resolve(r)
            },
            error: () => {
                const r = {
                    success: flase,
                    message: '网络错误, 请重新尝试',
                }
                reject(r)
            },
        }

        if (method === 'post') {
            const data = JSON.stringify(form)
            request.data = data
        }
        $.ajax(request)
    })
    return promise
}

class Api {
    get(path, response) {
        const url = path
        const method = 'get'
        const form = {}
        return ajax(url, method, form, response, response)
    }

    post(path, form, response) {
        const url = path
        const method = 'post'
        return ajax(url, method, form, response, response)
    }

    static stingify(query) {
        const s = Object.keys(query).map((k) => {
            const v = query[k]
            return `${k}=${v}`
        }).join('&')
    }
    static single() {
        const cls = this
        if (cls.instance === undefined) {
            cls.instance = new cls()
        }
        return cls.instance
    }
}

class MovieApi extends Api {
    constructor() {
        super()
        this.path = '/api/movie'
    }

    fetchMovies() {
        const path = this.path + '/all'
        return this.get(path)
    }
}