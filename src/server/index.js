import React from 'react'
import path from 'path'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware-for-koa'
import webpackConfig from '../../webpack.config.babel'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router'
import { ChunkExtractor } from '@loadable/server'
import Handlebars from 'handlebars'
import Koa from 'koa'
import serve from 'koa-static'
import mount from 'koa-mount'
import Router from 'koa-router'
import hbs from 'koa2-hbs'
import { fetchAll, clearAll } from '../api/useApi'

// import { matchRoutes } from 'react-router-config'

const app = new Koa()
const router = Router()
// const router2 = Router()

app.use(hbs.middleware({
    viewPath: path.resolve(__dirname, '../../views')
}))

app.use(mount('/dist', serve('dist')))

router.get('/test', async (ctx) => {
    ctx.body = {
        code: 200,
        data: {
            a: 1111
        }
    }
})

router.get('/test2', async (ctx) => {
    ctx.body = {
        code: 200,
        data: {
            b: 1111
        }
    }
})

if (process.env.NODE_ENV !== 'production') {
    const compiler = webpack(webpackConfig)
    const instance = webpackMiddleware(compiler, {
        logLevel: 'silent',
        publicPath: '/dist/web',
        writeToDisk(filePath) {
            console.log(filePath)
            return /dist\/node\//.test(filePath) || /loadable-stats/.test(filePath)
        },
    })
    app.use(
        instance
    )
    instance.waitUntilValid(() => {
        console.log('done')
    })
}

const nodeStats = path.resolve('./dist/node/loadable-stats.json')
const statsFile = path.resolve('./dist/web/loadable-stats.json')

router.get('(.*)', async (ctx) => {
    // const routes = matchRoutes(Routes, ctx.request.url)
    // if (routes.length > 0 ) {
    //     console.log(routes[0])
    //     console.log(routes[0].route)
    //     console.log(routes[0].route.component)
    //     console.log(routes[0].route.component.fetching)
    // }
    const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats })
    const { default: App } = nodeExtractor.requireEntrypoint()

    const extractor = new ChunkExtractor({
        statsFile,
        publicPath: '/dist/web'
    })


    const context = {}

    renderToString(extractor.collectChunks(<StaticRouter location={ctx.request.url} context={context} ><App /></StaticRouter>))
    
    const cache = await fetchAll()
    const jsx = extractor.collectChunks(
        <StaticRouter location={ctx.request.url} context={context} ><App rootStore={cache} /></StaticRouter>
    )

    const html = renderToString(jsx)
    clearAll()
    // You can now collect your script tags
    const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();
    // You can also collect your "preload/prefetch" links
    const linkTags = extractor.getLinkTags() // or extractor.getLinkElements();
    // And you can even collect your style tags (if you use "mini-css-extract-plugin")
    const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();
    await ctx.render('index', {
        cache: new Handlebars.SafeString(JSON.stringify(cache)),
        scriptTags: new Handlebars.SafeString(scriptTags),
        linkTags: new Handlebars.SafeString(linkTags),
        // styleTags,
        styleTags: new Handlebars.SafeString(styleTags),
        html: new Handlebars.SafeString(html),
    })
})

// app.use(router2.routes()).use(router2.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())


app.listen(3000)

