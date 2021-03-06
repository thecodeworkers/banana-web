import Image from 'next/dist/client/image'
import leftArrow from '@icons/left-arrow.png'
import rightArrow from '@icons/right-arrow.png'
import styles from './styles.module.scss'

const SlideArrow = (props) => {
  const { direction, onClick, showLeft = true } = props
  return (
    <>
      {direction == 'right' ?
        <div className={styles._rightArrow} onClick={onClick} >
          <Image src={rightArrow} alt={'right-arrow'} width={48} height={52} quality={100} />
        </div>
        :
        <div className={showLeft ? styles._leftArrow : styles._hide} onClick={onClick}  >
          <Image src={leftArrow} alt={'left-arrow'} width={48} height={52} quality={100} />
        </div>
      }
    </>
  )
}

export default SlideArrow
