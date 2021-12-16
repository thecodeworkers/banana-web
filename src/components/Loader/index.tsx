import { useEffect, createRef, useState } from 'react'
import lottie from 'lottie-web'
import loader from '../../../public/images/loader.json'
import styles from './styles.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setStatus } from '@store/actions'
import { useRouter } from 'next/router'

const Loader = ({ children }) => {

  const [flag, setFlag] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const { intermittence: { showLoader } } = useSelector((state: any) => state)
  const lottieContainer: any = createRef()

  const handleBeforeHistoryChange = url => url && setFlag(true)

  useEffect(() => {
    router.events.on('beforeHistoryChange', handleBeforeHistoryChange);

    if (showLoader && router.pathname == '/') {
      const anim = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: loader
      })

      anim.addEventListener('complete', () => dispatch(setStatus({ showLoader: false })))
      return () => {
        anim.destroy()
        router.events.off('beforeHistoryChange', handleBeforeHistoryChange)
      }
    }
  }, [])

  return (
    <>
      <div className={router.pathname == '/' && !flag ? (showLoader ? styles._main : styles._hide) : styles._static}>
        <div className={router.pathname == '/' && !flag ? (showLoader ? styles._lottieParent : styles._lottieParentHide) : styles._hidden}>
          <div className={`animation-container ${styles._lottie}`} ref={lottieContainer}></div>
        </div>
      </div>
      {children}
    </>
  )
}

export default Loader
