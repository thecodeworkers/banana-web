import styles from './styles.module.scss'
import Image from 'next/image'
import linkedin from '@icons/linkedin.svg'
import { fallbackRestUrl } from '@utils/path'

const Gallery = ({ content = [] }: any) => {
  return (
    <div className={styles._generalGallery}>
      {
        content?.map((item: any, index: number) => {
          return (
            <div className={item?.isImage ? styles._isImage : styles._teamPhoto}
              style={{ backgroundImage: `url(${fallbackRestUrl}${item?.picture?.url})` }}
              key={index}
            >
              <div className={styles._teamDescription}>
                <div>
                  <ul className={styles._teamList}>
                    <li className={styles._teamName}>{item?.fullName}</li>
                    <li className={styles._teamPosition}>{item?.jobTitle}</li>
                  </ul>
                </div>
                <div className={styles._imgParent} >
                  <a href={item?.socialLink} target='_blank' rel='noreferrer' >
                    <Image src={linkedin} alt='linked-in' width={34} height={34} quality={100} className={styles._socialLink} />
                  </a>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Gallery
