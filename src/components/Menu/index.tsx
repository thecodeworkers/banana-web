import React, { useEffect, useState, useRef } from 'react'
import styles from './styles.module.scss'
import { parseHour, caracasParseHour } from '@utils'
import close from '@icons/close.svg'
import Image from 'next/image'
import logo from '@icons/logo.png'
import logoWhite from '@icons/logo-white.png'
import behance from '@icons/behance-white.png'
import instagram from '@icons/insta-white.png'
import linkedin from '@icons/linkedin-white.png'
import behanceBlack from '@icons/behance.png'
import instagramBlack from '@icons/instagram.png'
import linkedinBlack from '@icons/linkedin.png'
import tcw from '@icons/tcw-logo.svg'
import { useSelector, useDispatch } from 'react-redux'
import { setStatus } from '@store/actions'
import gsap from 'gsap'
import { inAnimation, outAnimation } from './gsap'

const commonStyles: any = `
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 999;
`

const sections =
  [
    { route: 'Home' },
    { route: 'Servicios' },
    { route: 'Portfolio' },
    { route: 'Team' },
    { route: 'Blog' },
    { route: 'Classroom' },
  ]

const Menu = () => {

  const dispatch = useDispatch()
  const { classMenu } = useSelector((state: any) => state.intermittence)
  const [currentHour, setCurrentHour] = useState(caracasParseHour)

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
              <div className='_behanceParent'>
                <Image src={behance} alt={'behance'} width={30} height={18} quality={100} />
              </div>
              <div className='_instagramParent'>
                <Image src={instagram} alt={'instagram'} width={23} height={23} quality={100} />
              </div>

              <div className='_linkedinParent'>
                <Image src={linkedin} alt={'linkedine'} width={20} height={20} quality={100} />
              </div>
            </div>
            <p className={styles._copyright}>Banana creative. 2021 copyright ©</p>
          </div>
        </div>

        <div className={styles._blackSection}>
          <div className={styles._header}>
            <div className={styles._bananalogo}>
              <Image src={logoWhite} alt="logo-icon-white" width={22} height={20} quality={100} />
            </div>
            <div>
              <p className={styles._time}> CARACAS {currentHour} </p>
            </div>
            <div className={styles._closeParent}>
              <Image src={close} alt={'X'} width={16} height={16} quality={100} onClick={closeMenu} />
            </div>

          </div>
          <div className={styles._body}>
            {sections.map((item, index) => {
              return (
                <div className={styles._routesContainer} key={index}>
                  <hr className={styles._underscore}></hr>
                  <p className={styles._title}>{item.route}</p>
                </div>
              )
            })
            }
          </div>
          <div className={styles._contactContainer}>
            <div className={styles._contactNumber}>
              <div>
                <p className={`${styles._text} ${styles._mb1}`}>Contacto:</p>
              </div>
              <div className={styles._numbers}>
                <p className={`${styles._text} ${styles._mb1}`}>+58 424 837 8858</p>
                <p className={`${styles._text} ${styles._mb1}`}>+58 424 187 2382</p>
              </div>
            </div>

            <div className={styles._contactMail}>
              <div>
                <p className={styles._text}>¿Buscas trabajar con nosotros?</p>
              </div>
              <div>
                <p className={styles._text}>Escríbenos a:</p>
              </div>
              <div>
                <p className={styles._text}> </p>
              </div>
              <div>
                <p className={styles._text}>work@bananacreative.io</p>
              </div>
            </div>

            <div className={styles._contactMedia}>
              <div>
                <p className={styles._text}>No te pierdas de nada, síguenos en:</p>
              </div>
              <div>
                <p className={styles._text}> </p>
              </div>
              <div>
                <p className={styles._text}> </p>
              </div>
              <div>
                <p className={styles._text}>@_bananacreative</p>
              </div>
            </div>
          </div>
          <div className={styles._footerResponsive}>
            <div className={styles._logosContainer}>
              <div className={styles._socialMediaBlack}>
                <Image src={linkedinBlack} alt={'linkedine'} width={20} height={20} quality={100} />
                <Image src={behanceBlack} alt={'behance'} width={30} height={18} quality={100} />
                <Image src={instagramBlack} alt={'instagram'} width={23} height={23} quality={100} />

              </div>
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

        ._linkedinParent, ._behanceParent, ._instagramParent {
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
