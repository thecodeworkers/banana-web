import styles from './styles.module.scss'
import { GeneralButton, IconsButton } from '@components'
import { BoxArrow } from '@icons/svg'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { getPage } from '@store/actions'
import { fallbackRestUrl } from '@utils'
import { scrolling } from '@utils'

const Hero = ({ content, reference, data, contact, serviceReference }: any) => {

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
    dispatch(getPage({ query: 'home', language: position }))
  }

  return (
    <div className={styles._main}>
      <div className={styles._motion}>
        <div className={styles._webImageParent}>
          <Image src={`${fallbackRestUrl}${data?.image?.url}`} alt="logo-icon" layout='fill' quality={100} />
        </div>
        <div className={styles._responsiveImageParent}>
          <Image src={`${fallbackRestUrl}${data?.imageResponsive?.url}`} alt="logo-icon" layout='fill' quality={100} />
        </div>
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
              <IconsButton text={content?.recapButton[0]?.text}  right={true}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles._services}>
        <div className={styles._servicesBtnParent}>
          <GeneralButton text={content?.sectionButton?.text} method={() => scrolling(serviceReference)} />
        </div>
        <p>
          {content?.paragraph}
        </p>
      </div>
      <div className={styles._information}>
        <div className={styles._linksParent}>
          <div className={styles._bottomBtnParent}>
            <GeneralButton icon={false} height='2rem' padding='1.3rem' text={languages[selectedLanguage]} method={changeLanguage}  />
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
