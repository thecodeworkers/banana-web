import React, { FC } from 'react'
import styles from './styles.module.scss'
import { GeneralButton } from '@components'

const Banner = ({ withButton, background, buttonText, method }) => {
  //   const image = data?.Imagen

  return (
    <div className={styles._bannerContainer}>
      <img className={styles._banner} src={background} />
      {
        withButton ?
          <div className={styles._buttonContainer}>
            <GeneralButton icon={false} text={buttonText} height='2.5rem' method={method} />
          </div>
          : null
      }
    </div>
  )
}

export default Banner
