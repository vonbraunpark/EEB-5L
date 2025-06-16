import axios, { AxiosInstance } from 'axios'

const springAxiosInst: AxiosInstance = axios.create({
    baseURL: 'http://localhost:7777',
    timeout: 2500,
})

// ✅ 요청 인터셉터 설정: "/board/list" 만 예외
springAxiosInst.interceptors.request.use((config) => {
    const userToken = localStorage.getItem('userToken')
    const requestUrl = config.url || ''

    // "/board/list" 요청만 Authorization 제외
    if (requestUrl === '/board/list') {
        return config
    }

    if (userToken) {
        config.headers = config.headers || {}
        config.headers.Authorization = `Bearer ${userToken}`
    }

    return config
})

const fastApiAxiosInst: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 2500,
})

export default { springAxiosInst, fastApiAxiosInst }
