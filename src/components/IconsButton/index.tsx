import styles from './styles.module.scss'
import { Line, Star, DownArrow, Linkedin } from '@icons/svg'

const IconsButton = ({ text = 'DESCARGA RECAP', method = null, icon = 'linkedin', right = true}) => {

  const selectIcon = (icon) => {
    if (icon == 'star') return <Star />
    if( icon == 'linkedin') return <Linkedin />
  }

  return (
    <div className={styles._main}>
      <button className={styles._btn} onClick={method ? method : null}>
        {selectIcon(icon)}
        <p>{text}</p>
        <div className={!right ? styles._iconParent : styles._iconParentRight }>
          <DownArrow />
        </div>
      </button>
      <Line />
    </div>
  )
}

export default IconsButton
