import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import logo from '@icons/logo.png'
import toggle from '@icons/toggle.png'
import Image from 'next/image'
import { parseHour, caracasParseHour } from '@utils'
import { useDispatch } from 'react-redux'
import { setStatus } from '@store/actions'
import { useSelector } from 'react-redux'
import { LogoBanana, Toggle } from '@icons/svg'

const Navbar = () => {

  const dispatch = useDispatch()
  const { intermittence: { theme } } = useSelector((state: any) => state)
  const [currentHour, setCurrentHour] = useState(caracasParseHour)
  const [navClass, setNavClass] = useState('_mainChild')
  const [textClass, setTextClass] = useState('_cityText')

  const commonNav = (theme) => (`
    background-color: ${theme == 'dark' ? '#000' : '#FFF'};
    width: 100%;
    display: flex;
    height: inherit;
  `)

  const commonText = (theme) => (`
    color: ${theme == 'dark' ? '#FFF' : '#000'};
    font-family: NormalFont;
    font-size: 0.875rem;
  `)

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
              <div className='_toggleParent'>
                <LogoBanana theme={theme} />
              </div>
            </div>
            <div className={styles._childTwo}>
              <p className={textClass}> CARACAS {currentHour} </p>
            </div>
            <div className={styles._childThree}>
              <div className='_toggleParent' onClick={openMenu}>
                <Toggle theme={theme} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        ._mainChild {
          ${commonNav(theme)};
        }

        ._transparent {
          ${commonNav(theme)};
          animation: transparent .3s linear forwards;
        }

        ._solidColor {
          ${commonNav(theme)};
          animation: solidColor .3s linear forwards;
        }

        ._cityText {
          ${commonText(theme)};
        }

        ._cityTextTrasparent {
          ${commonText(theme)};
          animation: transparentText .3s linear forwards;
        }

        ._cityTextsolid {
          ${commonText(theme)};
          animation: solidText .3s linear forwards;
        }

        ._toggleParent {
          background-color: ${theme == 'dark' ? '#000' : '#FFF'};
          display: flex;
          justify-content: center;
          align-items: center;
          height: 2.938rem;
          width: 2.938rem;
          cursor: pointer;
        }

        @keyframes transparent {
          from {
            background-color: ${theme == 'dark' ? '#000' : '#FFF'};
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
            background-color: ${theme == 'dark' ? '#000' : '#FFF'};
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
