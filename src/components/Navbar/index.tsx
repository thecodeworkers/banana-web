import { useEffect, useState, useRef } from 'react'
import styles from './styles.module.scss'
import logo from '@icons/logo.png'
import toggle from '@icons/toggle.png'
import Image from 'next/image'
import { parseHour, caracasParseHour } from '@utils'
import { useDispatch } from 'react-redux'
import { setStatus } from '@store/actions'


const Navbar = () => {

  const dispatch = useDispatch()
  const [currentHour, setCurrentHour] = useState(caracasParseHour)
  const [navClass, setNavClass] = useState('_mainChild')
  const [textClass, setTextClass] = useState('_cityText')

  const commonNav = `
    background-color: #FFF;
    width: 100%;
    display: flex;
    height: inherit;
  `

  const commonText = `
    font-family: NormalFont;
    font-size: 0.875rem;
  `

  useEffect(() => {

    const interval: any = setInterval(getCurrentHour, 1000)
    let lastScrollTop: number

    document.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (scrollPosition > lastScrollTop) {
        setTextClass('_cityTextTrasparent')
        setNavClass('_transparent')

      } else {
        setTextClass('_cityTextsolid')
        setNavClass('_solidColor')
      }

      lastScrollTop = (scrollPosition <= 0) ? 0 : scrollPosition
    }, false)
    return () => clearInterval(interval)
  }, [])

  const getCurrentHour = () => {
    const date = new Date()
    const timeZone = date.toLocaleString('en-US', { timeZone: 'America/Caracas' })
    const caracasDate = new Date(timeZone)
    const parseDate: any = parseHour(caracasDate)
    setCurrentHour(parseDate)
  }

  const openMenu = () => dispatch(setStatus({ classMenu: '_inAnimation' }))

  return (
    <nav>
      <div className={styles._parent}>
        <div className={styles._parentChild}>
          <div className={navClass}>
            <div className={styles._childOne}>
              <div className={styles._toggleParent}>
                <Image
                  src={logo}
                  alt="logo-icon"
                  width={22}
                  height={22}
                  quality={100}
                />
              </div>
            </div>
            <div className={styles._childTwo}>
              <p className={textClass}> CARACAS {currentHour} </p>
            </div>
            <div className={styles._childThree}>
              <div className={styles._toggleParent} onClick={openMenu}>
                <Image
                  src={toggle}
                  alt="toggle-icon"
                  width={26}
                  height={26}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        ._mainChild {
          ${commonNav};
        }

        ._transparent {
          ${commonNav};
          animation: transparent .3s linear forwards;
        }

        ._solidColor {
          ${commonNav};
          animation: solidColor .3s linear forwards;
        }

        ._cityText {
          ${commonText};
        }

        ._cityTextTrasparent {
          ${commonText};
          animation: transparentText .3s linear forwards;
        }

        ._cityTextsolid {
          ${commonText};
          animation: solidText .3s linear forwards;
        }

        @keyframes transparent {
          from {
            background-color: #FFF;
          }

          to {
            background-color: rgba(0,0,0,0);
          }
        }

        @keyframes solidColor {
          from {
            background-color: rgba(0,0,0,0);
          }

          to {
            background-color: #FFF;
          }
        }

        @keyframes solidText {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes transparentText {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          ._mainChild {
            width: 100%;
          }
        }

      `}
      </style>

    </nav>
  )
}

export default Navbar
