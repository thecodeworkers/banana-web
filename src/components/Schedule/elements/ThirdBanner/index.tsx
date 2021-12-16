import { useEffect, useRef } from 'react'
import { GeneralButton, CountProduct } from '@components'
import { fallbackRestUrl } from '@utils/path'
import styles from './styles.module.scss'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setReference } from '@store/actions'
import { setStatus } from '@store/actions'

const ThirdBanner = (content, data) => {
  const background = `${fallbackRestUrl}${content?.data?.background.url}`
  const responsiveBackground = `${fallbackRestUrl}${content?.data?.backgroundResponsive.url}`

  const purposeRef = useRef()
  const dispatch = useDispatch()

  const openModal = () => dispatch(setStatus({ formModal: true }))

  useEffect(() => {
    dispatch(setStatus({ scheduleNumber: 0 }))
    dispatch(setReference({ purposeRef }))
    return () => { dispatch(setReference({ purposeRef: null })) }
  }, [])

  return (
    <>
      <div className={styles._main}>
        <div className={styles._container}>
          <div className={styles._leftSide}>
            <Image src={`${fallbackRestUrl}${content?.content?.productImage.url}`} alt="book" width={675} height={695} quality={100} />
          </div>
          <div className={styles._leftSideResponsive}>
            <Image src={`${fallbackRestUrl}${content?.content?.productImageResponsive.url}`} alt="book" width={232} height={245} quality={100} />
          </div>
          <div className={styles._rightside}>
            <p className={styles._title}>{content?.content?.name}</p>
            <div className={styles._contentText}>
              {content?.content?.features?.map(function (item, index) {
                return (
                  <div key={index} className={styles._textContent}>
                    <p className={styles._blackSubtitle}>{item.feature}</p>
                  </div>
                )
              })
              }
            </div>
            <p className={styles._subtitle}>{content?.content?.description}</p>

            <div className={styles._buttonsContainer}>
              <div className={styles._counterContainer}>
                <CountProduct />
              </div>
              <div className={styles._servicesBtnParent}>
                <GeneralButton background={'#134EBF'} icon={false} method={openModal}
                  text={`${content?.content?.buttonCart.text}${content?.content?.price}`} />
              </div>
            </div>
          </div>

        </div>
        <div ref={purposeRef} className={'_banner'}>
          <p className={styles._bigTitle}>{content?.data?.title}</p>
          <div className={styles._lineParent}>
            <div className={styles._line}></div>
            <div className={styles._lineContainer}>
              <span>{content?.data?.subtitle}</span>
              <p>{content?.data?.content}</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        ._banner{
          background-image: url(${background});
          background-size: cover;
          background-position: center;
          min-height: 40vh;
          width: 100%;
          background-repeat: no-repeat;
        }
        @media(max-width: 576px) {
          ._banner{
            background-image: url(${responsiveBackground});
            height: 70vh;
          }
       `}
      </style>
    </>
  )
}

export default ThirdBanner
