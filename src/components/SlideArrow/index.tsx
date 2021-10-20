import Image from 'next/dist/client/image';
import leftArrow from '@icons/left-arrow.png'
import rightArrow from '@icons/right-arrow.png'
import styles from './styles.module.scss'

const SlideArrow = (props) => {
  const { direction, onClick} = props;
  return (
    <>
      {direction == 'right' ?
        <div className={styles._rightArrow}  onClick={onClick} >
          <Image src={rightArrow} alt={'right-arrow'} width={52} height={52} quality={100} />
        </div>
        :
        <div className={styles._leftArrow} onClick={onClick}  >
          <Image src={leftArrow} alt={'left-arrow'} width={52} height={52} quality={100} />
        </div>
      }
    </>

  )
}

export default SlideArrow
