import styles from './styles.module.scss'
import { IconsButton } from '@components'

const HeroAboutUs = ({ content }: any) => {
  return (
    <div className={styles._main}>
      <div className={styles._motion}>
        <h1 className={styles._title}>{content?.title}</h1>
      </div>
      <div className={styles._purpose}>
        <div className={styles._purposeTexts}>
          <p>{content?.phrase}</p>
          <p>{content?.date}</p>
        </div>
        <div>
          <hr className={styles._line}></hr>
          <div className={styles._btnSuperParent}>
            <div className={styles._btnParent}>
              <IconsButton text={content?.recapButton?.[0]?.text} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles._services}>
        <p>{content?.paragraph}</p>
      </div>
    </div>
  )
}

export default HeroAboutUs
