import React, { useContext, useEffect } from 'react'
import Context from './Context'

export default function withSubscription(WrappedComponent) {
    const Component = function ({ ...others }) {
        const store = useContext(Context)
        useEffect(() => {
            return () => {
                console.log('clear')
                store.clear()
            }
        }, [])
        return <WrappedComponent {...others} />
    }
    // Component.fetching = WrappedComponent.fetching
    return Component
}