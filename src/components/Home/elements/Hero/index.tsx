import styles from './styles.module.scss'
import { GeneralButton, IconsButton } from '@components'
import { BoxArrow } from '@icons/svg'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { getPage, seletedReference, setStatus } from '@store/actions'
import { fallbackRestUrl, navigation, changeLanguage } from '@utils'
import { scrolling } from '@utils'
import { useRouter } from 'next/router'

const Hero = ({ content, reference, data, contact }: any) => {
  const { intermittence: { languages, selectedLanguage, opposedLang }, scrollReference } = useSelector((state: any) => state)
  const dispatch = useDispatch()
  const router = useRouter()

  const dispatchScrollTo = (...args) => {
    if (args[0]) {
      dispatch(seletedReference({
        [args[1]]: {
          current: args[0],
          [args[0]]: !scrollReference[args[1]][args[0]]
        }
      }))
    }
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
              <IconsButton text={content?.recapButton[0]?.text} right={true} method={() => navigation('/agendaunabeca', router)} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles._services}>
        <div className={styles._servicesBtnParent}>
          <GeneralButton text={content?.sectionButton?.text} method={() => dispatchScrollTo('services', 'homeReference')} />
        </div>
        <p>
          {content?.paragraph}
        </p>
      </div>
      <div className={styles._information}>
        <div className={styles._linksParent}>
          <div className={styles._bottomBtnParent}>
            <GeneralButton icon={false} height='2rem' padding='1.3rem' text={languages[opposedLang]} method={() => changeLanguage(languages, selectedLanguage, dispatch)} />
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
