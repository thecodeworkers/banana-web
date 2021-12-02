import styles from './styles.module.scss'
import haloWeb from '@icons/Halo.png'
import haloResponsive from '@icons/HaloResponsive.png'
import Image from 'next/image'
import { DotsLine } from '@components'

const ThirdBanner = (content) => {

  return (
    <>
      <div className={styles._bannerContainer}>
        <div className={styles._container}>
          <div className={styles._content}>
            <span className={styles._title}>{content?.content?.phrase}
              <b className={styles._blue}>{content?.content?.blueText}</b>
              {content?.content?.phraseTwo}</span>
          </div>
          <div className={styles._subtitleContainer}>
            <p className={styles._subtitle}>{content?.content?.ThirdBannerWords[0]?.word}</p>
            <div className={styles._stepsContainer}>
              <DotsLine number={3} />
            </div>

            <p className={styles._subtitle}>{content?.content?.ThirdBannerWords[1]?.word}</p>
            <div className={styles._stepsShortContainer}>
              <DotsLine number={1} />
            </div>

            <div className={styles._haloContainer}>
              <div className={styles._imageContainer}>
                <Image src={haloWeb} alt='haloWEB' width={341} height={178} quality={100} />
              </div>
              <div className={styles._imageContainerResponsive}>
                <Image src={haloResponsive} alt='haloResponsive' width={350} height={250} quality={100} />
              </div>
              <p className={styles._subtitle}>{content?.content?.ThirdBannerWords[2]?.word}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThirdBanner
