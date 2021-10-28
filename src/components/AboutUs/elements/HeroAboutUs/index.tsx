import styles from './styles.module.scss'
import { GeneralButton, IconsButton } from '@components'
import { BoxArrow } from '@icons/svg'
import Image from 'next/image'
import motion from '../../../../../public/images/my-motion.png'

const HeroAboutUs = () => {
  return (
    <div className={styles._main}>
      <div className={styles._motion}>
        <h1 className={styles._title}>Hello</h1>
      </div>
      <div className={styles._purpose}>
        <div className={styles._purposeTexts}>
          <p>Meet our team</p>
          <p>est. 17’</p>
        </div>

        <div>
          <hr className={styles._line}></hr>
          <div className={styles._btnSuperParent}>
            <div className={styles._btnParent}>
              <IconsButton text='Banana Creative' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles._services}>
        <p>
          We are a group of young creatives who work in all kinds of design and marketing areas and are tirelessly searching for inspiration, ideas, shapes and colors, innovative strategies and more authentic, curious and proactive people.
        </p>
      </div>
    </div>
  )
}

export default HeroAboutUs
