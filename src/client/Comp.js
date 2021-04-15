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
        if (!store.data) fetching()
    }, [])
    return (
        <div className="comp" onClick={() => {alert(1)}}>
            comp1111111
            <br />
            {loading ? 'loading' : 'loaded'}<br />
            {(data && data.a) || (store.data && store.data[0].a)}
        </div>
    )
}

export default withSubscription(Comp)