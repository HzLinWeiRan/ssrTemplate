import React, { useEffect } from 'react'
import withSubscription from './withSubscription'
import useAxios from 'axios-hooks'
// export const fetching = async function() {
//     console.log('this')
// }

function Comp2() {
    // useEffect(() => {
    //     fetching()
    // }, [])
    return (
        <h1>页面2</h1>
    )
}

export default withSubscription(Comp2)