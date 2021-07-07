import React, { useContext, useEffect } from 'react'
import Context from './Context'
import withSubscription from './withSubscription'
import useApi from '../api/useApi'
import { fetchTest } from '../api/index'
import './comp.less'

function Comp() {
    const [{ data, loading, error }, fetching] = useApi(fetchTest)
    const store = useContext(Context)
    useEffect(() => {
        if (!store.data || store.data.length === 0) fetching()
    }, [])
    return (
        <div className="comp" onClick={() => {alert(1)}}>
            <h1>页面1</h1>
            {loading ? 'loading' : 'loaded'}<br />
            {(data && data.a) || (store.data && store.data[0] && store.data[0].a)}
        </div>
    )
}

export default withSubscription(Comp)