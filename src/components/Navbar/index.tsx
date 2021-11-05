import { useEffect, useState, useRef } from 'react'
import styles from './styles.module.scss'
import logo from '@icons/logo.png'
import toggle from '@icons/toggle.png'
import Image from 'next/image'
import { parseHour, caracasParseHour } from '@utils'
import { useDispatch } from 'react-redux'
import { setStatus } from '@store/actions'
import gsap from 'gsap'

const Navbar = () => {

  const dispatch = useDispatch()
  const [currentHour, setCurrentHour] = useState(caracasParseHour)

  const hey = useRef(null)

  useEffect(() => {
    let lastScrollTop: number
    let timeline: any = gsap.timeline()
    const interval: any = setInterval(getCurrentHour, 1000)

    document.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (scrollPosition > lastScrollTop) {
        console.log('ENTER DOWN')
        timeline.to('._mainChild', 0.6, { backgroundColor: 'rgba(0,0,0,0)' }, 0.1)
      } else {
        console.log('ENTER UP')
        timeline.to('._mainChild', 0.6, { backgroundColor: '#FFF' }, 0.1)
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
        <div className='_mainChild' ref={hey}>
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
            <p> CARACAS {currentHour} </p>
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
      <style jsx>{`
        ._mainChild {
          background-color: #FFF;
          width: 98%;
          display: flex;
          height: inherit;
        }

        @media (max-width: 768px) {
          ._mainChild {
            width: 95%;
          }
        }
      `}
      </style>

    </nav>
  )
}

export default Navbar
