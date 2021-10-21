import { useEffect } from 'react'
import wrapper from '@store'
import Head from 'next/head'
import { useStore } from 'react-redux'
import '../../public/styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  const store: any = useStore()

  useEffect(() => {
    store.__persistor.persist()
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
