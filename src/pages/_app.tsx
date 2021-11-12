import { useEffect } from 'react'
import wrapper from '@store'
import Head from 'next/head'
import { useStore } from 'react-redux'
import '../../public/styles/globals.scss'
import { Layout } from '@components'
import { fallbackRestUrl } from '@utils/path'
import { useSelector } from 'react-redux'

const MyApp = ({ Component, pageProps }) => {
  const store: any = useStore()
  const { font: { bold, normal, light, medium } } = useSelector((state: any) => state)

  useEffect(() => {
    store.__persistor.persist()
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx>{`
        @font-face {
          font-family: 'NormalFont';
          src: url('${fallbackRestUrl}${normal?.url}');
        }
        @font-face {
          font-family: 'BoldFont';
          src: url('${fallbackRestUrl}${bold?.url}');
        }
        @font-face {
          font-family: 'LightFont';
          src: url('${fallbackRestUrl}${light?.url}');
        }
        @font-face {
          font-family: 'NormalFont';
          src: url('${fallbackRestUrl}${medium?.url}');
        }
        `}
      </style>
    </>
  )
}

export default wrapper.withRedux(MyApp)
