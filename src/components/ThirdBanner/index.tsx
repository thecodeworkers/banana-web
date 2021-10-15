import styles from './styles.module.scss'
import { Halo, StepFull, StepShort } from '@icons/resource'

const ThirdBanner = () => {


  return (
    <>
      <div className={styles._bannerContainer}>
        <div className={styles._container}>
          <div className={styles._content}>
            <p className={styles._title}>We have the nutrients your <b>brand</b> needs to keep on growing</p>
          </div>
          <div className={styles._subtitleContainer}>
            <p className={styles._subtitle}>analisis</p>
            <div className={styles._stepsContainer}>
              <StepFull height={150} width={250} />
            </div>

            <p className={styles._subtitle}>desarrollo de estrategias</p>
            <div className={styles._stepsContainer}>
              <StepShort height={150} width={250} />
            </div>

            <div className={styles._haloContainer}>
              <div className={styles._imageContainer}>
                <Halo />
              </div>
              <p className={styles._subtitle}>implementacion</p>

            </div>

          </div>
        </div>
      </div>
      <style jsx>{`

      `}</style>
    </>
  )
}

export default ThirdBanner
