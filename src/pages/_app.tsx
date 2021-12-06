import { useEffect, useState } from 'react'
import wrapper from '@store'
import Head from 'next/head'
import { useStore } from 'react-redux'
import '../../public/styles/globals.scss'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
import { Layout, Loader } from '@components'
import gsap from 'gsap'

const MyApp = ({ Component, pageProps }) => {
  const store: any = useStore()
  const [className, setClassName] = useState('')

  // useEffect(() => {
  //   document.addEventListener('mousemove', moveCircle)
  //   document.addEventListener('mousedown', toScale)
  //   document.addEventListener('mouseup', toNormal)
  //   store.__persistor.persist()

  //   return () => {
  //     removeEventListener('mousemove', moveCircle)
  //     removeEventListener('mousedown', toScale)
  //     removeEventListener('mouseup', toNormal)
  //   }
  // }, [])

  // const moveCircle = (event) => {
  //   const timeline: any = gsap.timeline()
  //   let x = event.clientX
  //   let y = event.clientY

  //   timeline.play()
  //     .to('._circle', 0.4, { x, y })
  // }

  // const toScale = () => setClassName('_scale')
  // const toNormal = () => setClassName('')

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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <Loader>
        <div className={`_circle ${className}`}> </div>
        <Component {...pageProps} />
      </Loader>

      {/* <style>{`
        ._circle {
          width: 1.875rem;
          height: 1.875rem;
          background-color: none;
          position: fixed;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          top: -0.9375rem;
          left: -0.9375rem;
          pointer-events: none;
          z-index: 1020;
          border: 3px solid #FFB703;
        }

        ._scale {
          width: 1.625rem;
          height: 1.625rem;
        }

        @media (max-width: 992px) {
          ._circle {
            display: none
          }
        }
      `}
      </style> */}
    </>
  )
}

export default wrapper.withRedux(MyApp)
