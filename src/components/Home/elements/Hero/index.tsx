import { createRef, useEffect } from 'react'
import styles from './styles.module.scss'
import { GeneralButton, IconsButton } from '@components'
import { BoxArrow } from '@icons/svg'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { getPage, setLanguage } from '@store/actions'
import lottie from 'lottie-web'
import { fallbackRestUrl } from '@utils'
import motion from '../../../../../public/images/motion.json'
import { scrolling } from '@utils'

const Hero = ({ content, reference, contact }: any) => {

  const animationContainer: any = createRef()

  const dispatch = useDispatch()
  const { intermittence: { languages, selectedLanguage } } = useSelector((state: any) => state)
  const changeLanguage = () => {
    const langs = Object.keys(languages)
    const position = langs.reduce((prev: any, next: any, index: any) => {
      if (selectedLanguage == next) prev = index
      if (prev < index) return next
      if (prev + 1 == langs.length) return 'es'
      return prev
    }, 0)
    dispatch(getPage({ query: 'home', language: 'en' }))
  }


  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: motion
    })

    return () => anim.destroy()
  }, [])



  return (
    <div className={styles._main}>
      <div className={styles._motion}>
        <div className={`animation-container ${styles._motionImage}`} ref={animationContainer}></div>
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
              <IconsButton text={content?.recapButton[0].text} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles._services}>
        <div className={styles._servicesBtnParent}>
          <GeneralButton text={content?.sectionButton?.text} />
        </div>
        <p>
          {content?.paragraph}
        </p>
      </div>
      <div className={styles._information}>
        <div className={styles._linksParent}>
          <div className={styles._bottomBtnParent}>
            <GeneralButton icon={false} text={languages[selectedLanguage]} method={changeLanguage} height='2.5rem' />
          </div>
          <a href="mailto:Hello@bananacreative.io">{contact?.FooterContact?.Contact[0]?.contactMail}</a>
          <a href="https://wa.me/584241872382" target='_blank' rel='noreferrer' >{contact?.FooterContact?.Contact[0]?.phoneOne}</a>
          <div className={styles._boxParent} onClick={() => scrolling(reference)}>
            <BoxArrow />
          </div>
          <a href='https://wa.me/584248378858' target='_blank' rel='noreferrer' > {contact?.FooterContact?.Contact[0]?.phoneTwo} </a>
          <a href='https://www.instagram.com/_bananacreative' target='_blank' rel='noreferrer' >{contact?.FooterContact?.Contact[0]?.socialAccount}</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
