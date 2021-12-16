import styles from './styles.module.scss'
import Image from 'next/image'
import { fallbackRestUrl } from '@utils'

const SecondBanner = ({ background, backgroundResponsive, lineText, titlte, subtitle }: any) => {

  return (
    <>
      <div className='_main'>
        <div className={styles._child}>
          <div className={styles._firstSection}>
            <div className={styles._lineParent}>
              <div className={styles._line}></div>
              <p>{lineText}</p>
            </div>
          </div>

          <div className={styles._middleSection}>
            <p>{subtitle}</p>
          </div>

          <div className={styles._lastSection}>
            <p>{titlte}</p>
            <div className={styles._exclamation}>
              <Image src='/icons/exclamation.png' alt='exclamation-icon' width={15.07} height={68.54} quality={100} />
            </div>
          </div>
        </div>

      </div>
      <style jsx>{`
        ._main {
          height: 100vh;
          width: 100%;
          background-image: url(${fallbackRestUrl}${background?.url});
          background-size: cover;
          background-position: center;
          position: relative;
        }

        @media (max-width: 768px) {
          ._main {
            padding-top: 2rem;
            height: 80vh;
            background-image: url(${fallbackRestUrl}${backgroundResponsive?.url});
          }
        }
      `}</style>
    </>
  )
}

export default SecondBanner
