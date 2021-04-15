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
    console.log('----comp2')
    const [{ data2, loading2, error2 }, refetch2] = useAxios(
        'http://localhost:3000/test2'
    )
    return (
        <div>comp2222</div>
    )
}

export default withSubscription(Comp2)