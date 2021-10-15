import React, { FC } from 'react'
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import Image  from 'next/image'

const Banner = ({ withButton, background, buttonText, method }) => {
  //   const image = data?.Imagen

  return (
    <>
    <div className={styles._bannerContainer}>
      <div className={'_banner'}  >
      {
        withButton ?
          <div className={styles._buttonContainer}>
            <GeneralButton icon={true} text={buttonText} height='2.5rem' method={method} />
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
      }
      `}</style>
    </>
  )
}

export default Banner
