import React, { FC } from 'react'
import styles from './styles.module.scss'
import { GeneralButton } from '@components'

const Banner = ({ withButton, background, buttonText, method }) => {
  //   const image = data?.Imagen

  return (
    <>
    <div className={styles._bannerContainer}>
      <div className={'_banner'}  >
      {
        withButton ?
          <div className={styles._buttonContainer}>
            <GeneralButton icon={true} text={buttonText} method={method} />
          </div>
          : null
      }
      </div>
    </div>
    <style jsx>{`
        ._banner{
          background-image: url(${background});
          background-size: cover;
          background-position: center;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          background-repeat: no-repeat
      }
      @media(max-width: 576px) {
        ._banner{
          background-size: 150% 100%
        }
        }
      `}</style>
    </>
  )
}

export default Banner
