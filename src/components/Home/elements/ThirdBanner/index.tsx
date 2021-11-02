import styles from './styles.module.scss'
import { StepFull, StepShort } from '@icons/resource'
import haloWeb from '@icons/Halo.png'
import haloResponsive from '@icons/HaloResponsive.png'
import Image from 'next/image'

const ThirdBanner = () => {

  return (
    <>
      <div className={styles._bannerContainer}>
        <div className={styles._container}>
          <div className={styles._content}>
            <p className={styles._title}>We have the nutrients your <b>brand</b> needs to keep on growing</p>
          </div>
          <div className={styles._subtitleContainer}>
            <p className={styles._subtitle}>analysis</p>
            <div className={styles._stepsContainer}>
              <StepFull height={150} width={250} />
            </div>

            <p className={styles._subtitle}>strategy development</p>
            <div className={styles._stepsContainer}>
              <StepShort height={150} width={250} />
            </div>

            <div className={styles._haloContainer}>
              <div className={styles._imageContainer}>
                <Image src={haloWeb} alt='haloWEB' width={341} height={178} quality={100} />
              </div>
              <div className={styles._imageContainerResponsive}>
                <Image src={haloResponsive} alt='haloResponsive' width={116} height={90} quality={100} />
              </div>
              <p className={styles._subtitle}>implementation</p>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ThirdBanner
