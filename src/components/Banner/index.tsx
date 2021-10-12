import React, { FC } from 'react'
import styles from './styles.module.scss'

const Banner = ({  }) => {
//   const image = data?.Imagen

  return (
    <div className={styles._bannerContainer}>
      <img className={styles._banner} src={'Banner.png'} />
    </div>
  )
}

export default Banner
