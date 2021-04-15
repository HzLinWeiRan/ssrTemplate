import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
})

instance.interceptors.response.use(function (response) {
    if (response.data.code === 200) {
        return response.data.data
    }
    return Promise.reject(response)
}, function (err) {
    return Promise.reject(err)
})

const get = (url, params) => {
    return instance.get(url, {
        params
    })
}

const post = (url, data) => {
    return instance.post(url, data)
}

export const fetchTest = () => get('/test')

export const fetchTest2 = () => get('/test2')
