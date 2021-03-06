import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import { fallbackRestUrl } from '@utils'
import Image from 'next/image'
import tcw from '@icons/tcw-logo.svg'
import { useSelector, useDispatch } from 'react-redux'
import { setStatus, getPage, seletedReference } from '@store/actions'
import gsap from 'gsap'
import { inAnimation, outAnimation } from './gsap'
import { useRouter } from 'next/router'
import { LogoBanana, CloseIcon } from '@icons/svg'
import { Clok } from '@components'
import Router from 'next/router'
import { navigation, changeLanguage } from '@utils'

const nextRoutes = [
  { path: '/', query: 'home' },
  { path: 'about-us', query: 'aboutUs' },
  { path: '/portfolio', query: 'portfolio' },
  { path: '/agendaunabeca', query: 'schedule' },
]

const commonStyles: any = `
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 999;
`
const Menu = ({ menuLight = false }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const currentRoute = router.pathname
  const currentQuery = nextRoutes.find((item: any) => item.path == currentRoute)

  const {
    page: { footer, header },
    intermittence: { languages, selectedLanguage, classMenu, opposedLang },
    scrollReference
  } = useSelector((state: any) => state)

  const resetState = () => dispatch(setStatus({ classMenu: '_mainMenu' }))
  Router.events.on('routeChangeComplete', resetState)

  useEffect(() => {
    const timeline: any = gsap.timeline()
    if (classMenu == '_inAnimation') return inAnimation(timeline)
    if (classMenu == '_outAnimation') return outAnimation(timeline)
  }, [classMenu])

  const closeMenu = () => dispatch(setStatus({ classMenu: '_outAnimation' }))

  const navigate = (item: any) => {
    navigation(item, router)
    closeMenu()
  }

  const returnSocialMedia = (item: any, lightMode: boolean) => {
    const splitItem = item?.name?.split('-')?.[1]
    if (lightMode) return splitItem == 'black'
    return splitItem == 'white'
  }

  const navigateOrScrollTo = (...args) => {
    if (router.pathname != args[0]) {
      if (args[1]) dispatch(seletedReference({ [args[2]]: { current: args[1] } }))
      router.push(args[0])

      return
    }

    if (args[1]) {
      dispatch(seletedReference({
        [args[2]]: {
          current: args[1],
          [args[1]]: !scrollReference[args[2]][args[1]]
        }
      }))
    }
  }

  const clickOption = (route, reference = null, key = '') => {
    navigateOrScrollTo(route, reference, key)
    closeMenu()
  }

  return (
    <>
      <div className={classMenu}>
        <div className={styles._whiteSection}>
          <div className={styles._toggleParent} onClick={navigate}>
            <LogoBanana />
          </div>
          <div className={styles._socialBanner}>
            <div className={styles._socialMedia}>
              {footer?.social?.map(function (item, index) {
                return (
                  item?.name?.split('-')?.[1] == 'black' ?
                    <div className={`${item?.name}${'-parent'}`} key={index}>
                      <a href={item?.url} target='_blank' rel='noreferrer' >
                        <Image src={`${fallbackRestUrl}${item?.icon?.url}`} alt={item?.icon?.name} width={25} height={25} quality={100} />
                      </a>
                    </div>
                    : null
                )
              }
              )}
            </div>
            <p className={styles._copyright}>{footer?.copyright}</p>
          </div>
        </div>

        <div className={!menuLight ? styles._blackSection : styles._lightSection}>
          <div className={styles._header}>
            <div className={styles._bananalogo} onClick={() => navigate('/')}>
              <LogoBanana theme={!menuLight ? 'dark' : 'light'} />
            </div>
            <div className={styles._space}>
              <p></p>
            </div>
            <div>
              <Clok theme='dark' />
            </div>
            <div className={styles._closeParent} onClick={closeMenu}>
              <CloseIcon theme={!menuLight ? 'dark' : 'light'} />
            </div>

          </div>
          <div className={!menuLight ? styles._body : styles._bodyLightTheme}>
            {(!menuLight ? footer?.sections || [] : header?.navigations?.route || []).map((item, index) => {
              const isRoute = item?.route?.includes('/')
              const prefix = item.route

              return (
                <div className={styles._routesContainer} key={index}>
                  <hr className={!menuLight ? styles._underscore : styles._pinkUnderscore}></hr>
                  <p
                    className={!menuLight ? styles._title : styles._titleLight}
                    onClick={() => {
                      if (isRoute && prefix != '/')
                        return navigate(item?.route)

                      if (prefix == '/')
                        return clickOption('/', 'hero', 'homeReference')

                      if (prefix == 'services')
                        return clickOption('/', 'services', 'homeReference')
                    }}
                  >
                    {item?.name}
                  </p>
                </div>
              )
            })
            }
            <div className={styles._bottomBtnParent}>
              <GeneralButton icon={false} background={!menuLight ? '#FFF' : '#000'} textColor={!menuLight ? '#000' : '#FFF'} text={languages[opposedLang]} method={() => changeLanguage(languages, selectedLanguage, dispatch, currentQuery?.query)} height='1rem' />
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

          <div className={!menuLight ? styles._footerResponsive : styles._footerLightResposive}>
            <div className={styles._logosContainer}>
              {footer?.social?.map(function (item, index) {
                return (
                  returnSocialMedia(item, menuLight) ?
                    <div className={styles._socialMediaBlack} key={index}>
                      <a href={item?.url} target='_blank' rel='noreferrer' >
                        <Image src={`${fallbackRestUrl}${item?.icon?.url}`} alt={item?.icon?.name} width={20} height={20} quality={100} />
                      </a>
                    </div> : null
                )
              }
              )}
            </div>
            <div>
              <a href={'https://thecodeworkers.com'} target='_blank' rel='noreferrer' >
                <Image src={tcw} alt={'tcw'} width={26} height={26} quality={100} />
              </a>
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
          transform: translateY(3.125rem)
        }

        @keyframes slideIn {
          from {
            right: -100%;
          }

          to {
            right: 0%;
          }
        }

        @keyframes slideOut {
          from {
            right: 0%;
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
