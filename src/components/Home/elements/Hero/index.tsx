import styles from './styles.module.scss'
import { GeneralButton, IconsButton } from '@components'
import { BoxArrow } from '@icons/svg'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { getPage, setLanguage } from '@store/actions'

const Hero = (content) => {

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
    dispatch(getPage({ query: 'home', language: 'es' }))
  }

  return (
    <div className={styles._main}>
      <div className={styles._motion}>
        <Image
          src={content?.data?.image?.url}
          alt="motion"
          quality={100}
          layout="fill"
          objectFit="fill"
        />
      </div>
      <div className={styles._purpose}>
        <div className={styles._purposeTexts}>
          <p>{content?.content?.phrase}</p>
          <p>{content?.content?.date}</p>
        </div>

        <div>
          <hr className={styles._line}></hr>
          <div className={styles._btnSuperParent}>
            <div className={styles._btnParent}>
              <IconsButton text={content?.content?.recapButton[0].text} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles._services}>
        <div className={styles._servicesBtnParent}>
          <GeneralButton text={content?.content?.sectionButton?.text} />
        </div>
        <p>
          {content?.content?.paragraph}
        </p>
      </div>
      <div className={styles._information}>
        <div className={styles._linksParent}>
          <div className={styles._bottomBtnParent}>
            <GeneralButton icon={false} text={languages[selectedLanguage]} method={changeLanguage} height='2.5rem' />
          </div>
          <a href="mailto:Hello@bananacreative.io">Hello@bananacreative.io</a>
          <a href="https://wa.me/584241872382" target='_blank' rel='noreferrer' > +58 424 187 2382 </a>
          <div className={styles._boxParent}>
            <BoxArrow />
          </div>
          <a href='https://wa.me/584248378858' target='_blank' rel='noreferrer' > +58 424 837 8858 </a>
          <a href='https://www.instagram.com/_bananacreative' target='_blank' rel='noreferrer' > @_bananacreative </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
