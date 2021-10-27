import styles from './styles.module.scss'
import { team } from './data'
import Image from 'next/image'
import linkedin from '@icons/linkedin.svg'

const Gallery = () => {
  return (
    <div className={styles._generalGallery}>
      {
        team.map((item: any, index: number) => {
          return (
            <div className={styles._teamPhoto}
              style={{ backgroundImage: `url(${item?.img})` }}
              key={index}
            >
              <div className={styles._teamDescription}>
                <div>
                  <ul className={styles._teamList}>
                    <li className={styles._teamName}> {item.name} </li>
                    <li className={styles._teamPosition}> {item.position} </li>
                  </ul>
                </div>
                <div className={styles._imgParent}>
                  <Image src={linkedin} alt='linked-in' width={34} height={34} quality={100} />
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
