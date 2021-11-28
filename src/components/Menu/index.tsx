import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import { parseHour, caracasParseHour, fallbackRestUrl } from '@utils'
import close from '@icons/close.svg'
import Image from 'next/image'
import logo from '@icons/logo.png'
import logoWhite from '@icons/logo-white.png'
import tcw from '@icons/tcw-logo.svg'
import { useSelector, useDispatch } from 'react-redux'
import { setStatus, getPage } from '@store/actions'
import gsap from 'gsap'
import { inAnimation, outAnimation } from './gsap'
import { useRouter } from 'next/router'

const commonStyles: any = `
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 999;
`
const Menu = () => {

  const router = useRouter()
  const dispatch = useDispatch()
  const { classMenu } = useSelector((state: any) => state.intermittence)
  const [currentHour, setCurrentHour] = useState(caracasParseHour)
  const { page: { footer }, intermittence: { languages, selectedLanguage } } = useSelector((state: any) => state)

  useEffect(() => {
    const interval = setInterval(getCurrentHour, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timeline: any = gsap.timeline()
    if (classMenu == '_inAnimation') return inAnimation(timeline)
    if (classMenu == '_outAnimation') return outAnimation(timeline)
  }, [classMenu])

  const getCurrentHour = () => {
    const date = new Date()
    const timeZone = date.toLocaleString('en-US', { timeZone: 'America/Caracas' })
    const caracasDate = new Date(timeZone)
    const parseDate: any = parseHour(caracasDate)
    setCurrentHour(parseDate)
  }

  const closeMenu = () => dispatch(setStatus({ classMenu: '_outAnimation' }))

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

  const navigation = (item: any) => {
    const { name } = item
    if (name.toLowerCase() == 'team') router.push('about-us')
    if (name.toLowerCase() == 'portfolio') router.push('portfolio')
    closeMenu()
  }

  return (
    <>
      <div className={classMenu}>
        <div className={styles._whiteSection}>
          <div className={styles._toggleParent}>
            <Image
              src={logo}
              alt="logo-icon"
              width={22}
              height={20}
              quality={100}
            />
          </div>
          <div className={styles._socialBanner}>
            <div className={styles._socialMedia}>
              {footer?.social?.map(function (item, index) {
                return (
                  item?.name?.split('-')?.[1] == 'black' ?
                    <div className={`${item?.name}${'-parent'}`} key={index}>
                      <Image src={`${fallbackRestUrl}${item?.icon?.url}`} alt={item?.icon?.name} width={25} height={25} quality={100} />
                    </div>
                    : null
                )
              }
              )}
            </div>
            <p className={styles._copyright}>Banana creative. 2021 copyright ©</p>
          </div>
        </div>

        <div className={styles._blackSection}>
          <div className={styles._header}>
            <div className={styles._bananalogo}>
              <Image src={logoWhite} alt="logo-icon-white" width={22} height={20} quality={100} />
            </div>
            <div className={styles._space}>
              <p></p>
            </div>
            <div>
              <p className={styles._time}> CARACAS {currentHour} </p>
            </div>
            <div className={styles._closeParent}>
              <Image src={close} alt={'X'} width={16} height={16} quality={100} onClick={closeMenu} />
            </div>

          </div>
          <div className={styles._body}>
            {footer?.sections?.map(function (item, index) {
              return (
                <div className={styles._routesContainer} key={index}>
                  <hr className={styles._underscore}></hr>
                  <p className={styles._title} onClick={() => navigation(item)} >{item.name}</p>
                </div>
              )
            })
            }
            <div className={styles._bottomBtnParent}>
              <GeneralButton icon={false} background={'#fff'} textColor={'#000'} text={languages[selectedLanguage]} method={changeLanguage} height='1rem' />
            </div>
          </div>
          <div className={styles._contactContainer}>
            <div className={styles._contactNumber}>
              <p className={`${styles._text} `}>{footer?.FooterContact?.Contact[0]?.titleNumbers}</p>
              <p className={`${styles._textBold} `}>{footer?.FooterContact?.Contact[0]?.phoneOne}</p>
              <p className={`${styles._textBold} `}>{footer?.FooterContact?.Contact[0]?.contactMail}</p>
            </div>

            <div className={styles._contactMail}>
              <div>
                <p className={styles._text}>{footer?.FooterContact?.Contact[0]?.titleEmail}</p>
              </div>
              <div>
                <p className={styles._text}>{footer?.FooterContact?.Contact[0]?.subtitleSocial}</p>
              </div>

              <div>
                <p className={styles._textBold}>{footer?.FooterContact?.Contact[0]?.email}</p>
              </div>
            </div>

            <div className={styles._contactMedia}>
              <div>
                <p className={styles._text}>{footer?.FooterContact?.Contact[0]?.titleSocial}</p>
              </div>
              <div>
                <p className={styles._text}> </p>
              </div>

              <div>
                <p className={styles._textBold}>{footer?.FooterContact?.Contact[0]?.socialAccount}</p>
              </div>
            </div>
          </div>

          <div className={styles._footerResponsive}>
            <div className={styles._logosContainer}>
              {footer?.social?.map(function (item, index) {
                return (
                  item?.name?.split('-')?.[1] == 'white' ?
                    <div className={styles._socialMediaBlack} key={index}>
                      <Image src={`${fallbackRestUrl}${item?.icon?.url}`} alt={item?.icon?.name} width={20} height={20} quality={100} />
                    </div>
                    : null
                )
              }
              )}
            </div>
            <div>
              <Image src={tcw} alt={'tcw'} width={26} height={26} quality={100} />
            </div>
          </div>
        </div >
      </div>

      <style jsx>{`
        ._mainMenu {
          ${commonStyles};
          right: -100%;
        }

        ._inAnimation {
          ${commonStyles};
          animation: slideIn 1s linear forwards;
        }

        ._outAnimation {
          ${commonStyles};
          animation: slideOut 1s ease-in-out forwards;
        }

        .linkedin-black-parent, .behance-black-parent, .insta-black-parent {
          cursor: pointer;
          opacity: 0;
          transform: translateY(50px)
        }

        @keyframes slideIn {
          from {
            right: -100%;
          }

          to {
            right: 0;
          }
        }

        @keyframes slideOut {
          from {
            right: 0;
          }

          to {
            right: -100%;
          }
        }
    `}
      </style>
    </>
  )
}

export default Menu
