import { useEffect } from 'react'
import wrapper from '@store'
import Head from 'next/head'
import { useStore } from 'react-redux'
import '../../public/styles/globals.scss'
import { fallbackRestUrl } from '@utils/path'
import { useSelector } from 'react-redux'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
import { Layout, Loader } from '@components'

const MyApp = ({ Component, pageProps }) => {
  const store: any = useStore()
  const { font: { bold, normal, light, medium } } = useSelector((state: any) => state)

  useEffect(() => {
    store.__persistor.persist()
  }, [])

  let progress = new ProgressBar({
    size: 3,
    color: '#FFB703',
    className: 'bar-of-progress',
    delay: 100,
  })

  Router.events.on('routeChangeStart', progress.start);
  Router.events.on('routeChangeComplete', progress.finish);
  Router.events.on('routeChangeError', progress.finish);

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
        }`}
      </style>
    </>
  )
}

export default wrapper.withRedux(MyApp)
