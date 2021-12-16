import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import { setStatus } from '@store/actions'
import { useSelector } from 'react-redux'
import { LogoBanana, Toggle } from '@icons/svg'
import Clock from '../Clock'
import { navigation } from '@utils'
import { useRouter } from 'next/router'

const Navbar = () => {

  const dispatch = useDispatch()
  const { intermittence: { theme } } = useSelector((state: any) => state)
  const [navClass, setNavClass] = useState('_mainChild')
  const [textClass, setTextClass] = useState('_cityText')
  const router = useRouter()
  let lastScrollTop: number

  const commonNav = (theme) => (`
    background-color: ${theme == 'dark' ? '#000' : '#FFF'};
    width: 100%;
    display: flex;
    height: inherit;
  `)

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => { document.removeEventListener('scroll', scrollHandler) }
  }, [])

  const openMenu = () => dispatch(setStatus({ classMenu: '_inAnimation' }))
  const navigate = () => { navigation('/', router) }

  const scrollHandler = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop
    if (scrollPosition > lastScrollTop) {
      setTextClass('_cityTextTrasparent')
      setNavClass('_transparent')
    } else {
      setTextClass('_cityTextsolid')
      setNavClass('_solidColor')
    }

    lastScrollTop = (scrollPosition <= 0) ? 0 : scrollPosition
  }

  return (
    <nav>
      <div className={styles._parent}>
        <div className={styles._parentChild}>
          <div className={navClass}>
            <div className={styles._childOne}>
              <div className='_toggleParent' onClick={navigate}>
                <LogoBanana theme={theme} />
              </div>
            </div>
            <div className={styles._childTwo}>
              <Clock textClass={textClass} theme={theme} />
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
