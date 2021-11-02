import styles from './styles.module.scss'
import { GeneralButton, IconsButton } from '@components'
import { BoxArrow } from '@icons/svg'
import Image from 'next/image'
import motion from '../../../../../public/motion-english.gif'

const Hero = () => {
  return (
    <div className={styles._main}>
      <div className={styles._motion}>
        <Image
          src={motion}
          alt="motion"
          quality={100}
          layout="fill"
          objectFit="fill"
        />
      </div>
      <div className={styles._purpose}>
        <div className={styles._purposeTexts}>
          <p>It’s about purpose</p>
          <p>est. 17’</p>
        </div>

        <div>
          <hr className={styles._line}></hr>
          <div className={styles._btnSuperParent}>
            <div className={styles._btnParent}>
              <IconsButton />
            </div>
          </div>
        </div>
      </div>
      <div className={styles._services}>
        <div className={styles._servicesBtnParent}>
          <GeneralButton />
        </div>
        <p>
          Banana Creative is a marketing and design agency focused on sowing proposals, cultivating strategies and harvesting creative and authentic solutions for brands hungry for innovation. We create visual and functional universes that communicate real purposes.
        </p>
      </div>
      <div className={styles._information}>
        <div className={styles._linksParent}>
          <div className={styles._bottomBtnParent}>
            <GeneralButton icon={false} text='Español' height='2.5rem' />
          </div>
          <a href="mailto:Hello@bananacreative.io">Hello@bananacreative.io</a>
          <a href="https://wa.me/584241872382" target='_blank'> +58 424 187 2382 </a>
          <div className={styles._boxParent}>
            <BoxArrow />
          </div>
          <a href='https://wa.me/584248378858' target='_blank'> +58 424 837 8858 </a>
          <a href='https://www.instagram.com/_bananacreative' target='_blank'> @_bananacreative </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
