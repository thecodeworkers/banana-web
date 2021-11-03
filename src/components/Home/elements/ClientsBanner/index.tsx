import styles from './styles.module.scss'
import * as logos from '@icons/logos'
import Image from 'next/dist/client/image'

const ClientsBanner = () => {

  return (
    <>
      <div className={styles._bannerContainer}>
        <div className={styles._container}>
          <div className={styles._content}>
            {Object.keys(logos).map(function (logo, index) {
              return (
                <div className={styles._logosContainer} key={index}>
                  <Image src={logos[logo]} alt={logos[logo]} width={100} height={150} quality={100} />
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
      <style jsx>{`

      `}</style>
    </>
  )
}

export default ClientsBanner
