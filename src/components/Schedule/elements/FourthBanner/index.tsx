import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { fallbackRestUrl } from '@utils/path'

const FourthBanner = ({ content }: any) => {

  const background = `${fallbackRestUrl}${content?.gifBanner?.url}`
  const responsiveBackground = `${fallbackRestUrl}${content?.gifBannerResponsive?.url}`

  return (
    <>
      <div className={styles._bannerContainer}>
        <div className={'_banner'} />
      </div>
      <div className={styles._logosContainer}>
        <div className={styles._listLogos}>
          {content?.logos?.map((item, index) => {
            return (
              <div key={index}>
                <Image src={`${fallbackRestUrl}${item?.icon?.url}`} alt={'item?.icon?.name'} width={183} height={19} quality={100} />
              </div>
            )
          })}

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
          background-image: url(${responsiveBackground});
        }
      }
      `}</style>
    </>
  )
}

export default FourthBanner
