import loadable from '@loadable/component'

// import Comp from "./Comp.js"
const Comp = loadable(() => import("./Comp.js"), { fallback: 'loading' })
const Comp2 = loadable(() => import("./Comp2.js"), { fallback: 'loading' })

export default [
    {
        path: "/comp",
        component: Comp
    },
    {
        path: '/comp2',
        component: Comp2
    }
]