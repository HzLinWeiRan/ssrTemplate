import React, { useEffect, useState } from 'react'
import { Route, Link, useLocation } from 'react-router-dom'
import Context from './Context'
import routes from './routes'

function App({
    rootStore,
}) {
    const [rootData, setRootData] = useState(rootStore)
 
    return (
        <Context.Provider value={{
            data: rootData,
            clear: () => { setRootData(undefined) }
        }}>
            <div className="app">
                <Link to="/comp">comp1</Link>
                <Link to="/comp2">comp2</Link>
                <div>
                    {
                        routes.map(item => <Route key={item.path} {...item} />)
                    }
                </div>
            </div>
        </Context.Provider>
    )
}

export default App