import styles from './styles.module.scss'
import Image from 'next/dist/client/image'
import { fallbackRestUrl } from '@utils/path'

const ClientsBanner = (content) => {

  return (
    <div className={styles._bannerContainer}>
      <div className={styles._container}>
        <div className={styles._content}>
          {content?.content?.Clients?.map((item, index) => {
            return (
              <div className={styles._logosContainer} key={index}>
                <Image src={`${fallbackRestUrl}${item?.logo?.url}`} alt={item?.name} width={100} height={150} quality={100} />
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  )
}

export default ClientsBanner
