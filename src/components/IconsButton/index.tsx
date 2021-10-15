import styles from './styles.module.scss'
import { Line, Star, DownArrow } from '@icons/svg'

const IconsButton = ({ text = 'DESCARGA RECAP', method = null }) => {
  return (
    <div className={styles._main}>
      <button className={styles._btn} onClick={method ? method : null}>
        <Star />
        <p>{text}</p>
        <div className={styles._iconParent}>
          <DownArrow />
        </div>
      </button>
      <Line />
    </div>
  )
}

export default IconsButton
