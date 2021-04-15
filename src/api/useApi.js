import { useReducer } from 'react'

if (global && !global.ssrPromises) {
    console.log('init')
    global.ssrPromises = []
}
// export const __ssrPromises = []

function useApi(api, params) {
    if (typeof window === 'undefined') {
        global.ssrPromises.push(async () => {
            return api(params)
        })
    }
    const [state, dispatch] = useReducer((state, action) => {
        let resultState = state
        if (action.type === 'loading') {
            resultState = {
                ...state,
                loading: true
            } 
        }
        if (action.type === 'loaded') {
            resultState = {
                ...state,
                loading: false
            } 
        }
        if (action.type === 'set') {
            resultState = {
                ...state,
                data: action.data
            } 
        }
        if (action.type === 'error') {
            resultState = {
                ...state,
                error: action.error
            } 
        }
        return resultState
    }, {
        loading: false
    })
    async function fetching(params = {}) {
        try {
            dispatch({ type: 'loading' })
            const res = await api(params)
            dispatch({ type: 'set', data: res })
        } catch (e) {
            dispatch({ type: 'error', error: e })
        } finally {
            dispatch({ type: 'loaded' })
        }
    }
    return [state, fetching]
}

export const fetchAll = () => {
    const promiseCaches = global.ssrPromises.map(act => act())
    return Promise.all(promiseCaches)
}

export const clearAll = () => {
    global.ssrPromises.length = 0
}

export default useApi