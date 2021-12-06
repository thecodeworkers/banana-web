import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

const Banner = ({ background, responsiveImage }) => {

  return (
    <>
      <div className={styles._bannerContainer}>
        <div className={'_banner'} />


      </div>
      <div className={styles._logosContainer}>
        <div className={styles._listLogos}>
          <Image src={`/icons/banana-creative.png`} alt={'item?.icon?.name'} width={183} height={19} quality={100} />
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
          background-repeat: no-repeat;
      }
      @media(max-width: 576px) {
        ._banner{
          background-image: url(${responsiveImage});
          background-size: 100% 100%
        }
      }
      `}</style>
    </>
  )
}

export default Banner
