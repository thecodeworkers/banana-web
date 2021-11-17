import { useEffect } from 'react'
import wrapper from '@store'
import Head from 'next/head'
import { useStore } from 'react-redux'
import '../../public/styles/globals.scss'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
import { Layout, Loader } from '@components'

const MyApp = ({ Component, pageProps }) => {
  const store: any = useStore()

  useEffect(() => {
    store.__persistor.persist()
  }, [])

  let progress = new ProgressBar({
    size: 3,
    color: '#FFB703',
    className: 'bar-of-progress',
    delay: 100,
  })

  Router.events.on('routeChangeStart', progress.start)
  Router.events.on('routeChangeComplete', progress.finish)
  Router.events.on('routeChangeError', progress.finish)

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Loader>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Loader>
    </>
  )
}

export default wrapper.withRedux(MyApp)
