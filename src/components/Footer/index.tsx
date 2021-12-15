import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '@icons/banana-creative.png'
import tcw from '@icons/tcw-logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fallbackRestUrl } from '../../utils/path'
import { useRouter } from 'next/router'
import { navigation } from '@utils'
import { seletedReference } from '@store/actions'

const Footer = () => {
  const router = useRouter()
  const { page: { footer }, scrollReference } = useSelector((state: any) => state)

  const dispatch = useDispatch()
  const navigate = (item: any) => { navigation(item, router) }

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
  }

  return (
    <div className={styles._container}>
      <div className={styles._head}>
        <div>
          <Image src={logo} alt={'banana-creative'} width={173} height={17} quality={100} />
        </div>

        <div className={styles._sectionsContainer}>
          <div className={styles._sectionsContent}>
            {footer?.sections?.map(function (item, index) {
              const isRoute = item.route.includes('/')
              const prefix = item.route

              return (
                <div key={index} onClick={() => {
                  if (isRoute && prefix != '/')
                    return navigate(item?.route)

                  if (prefix == '/')
                    return clickOption('/', 'hero', 'homeReference')

                  if (prefix == 'services')
                    return clickOption('/', 'services', 'homeReference')
                }}>
                  <p className={styles._sections}>{item.name}</p>
                </div>
              )
            })
            }
          </div>
          <div className={styles._socialBanner}>
            <div className={styles._socialMedia}>
              {footer?.social?.map(function (item, index) {
                return (
                  item?.name?.split('-')?.[1] == 'white' ?
                    <div key={index}>
                      <a href={item?.url} target='_blank' rel='noreferrer' >
                        <Image src={`${fallbackRestUrl}${item?.icon?.url}`} alt={item?.icon?.name} width={25} height={25} quality={100} />
                      </a>
                    </div>
                    : null
                )
              }
              )}
            </div>

          </div>
        </div>
        <hr className={styles._line}></hr>
        <div className={styles._contactContainer}>
          <div className={styles._contactNumber}>
            <p className={`${styles._text} `}>{footer?.FooterContact?.Contact[0]?.titleNumbers}</p>
            <a className={styles._link} href={`tel:${footer?.FooterContact?.Contact[0]?.phoneOne}`}>
              <p className={`${styles._textBold} `}>{footer?.FooterContact?.Contact[0]?.phoneOne}</p>
            </a>

            <a className={styles._link} href={`mailto:${footer?.FooterContact?.Contact[0]?.contactMail}`}>
              <p className={`${styles._textBold} `}>{footer?.FooterContact?.Contact[0]?.contactMail}</p>
            </a>
          </div>

          <div className={styles._contactMail}>
            <div>
              <p className={styles._text}>{footer?.FooterContact?.Contact[0]?.titleEmail}</p>
            </div>
            <div>
              <p className={styles._text}>{footer?.FooterContact?.Contact[0]?.subtitleSocial}</p>
            </div>

            <div>
              <a className={styles._link} href={`mailto:${footer?.FooterContact?.Contact[0]?.email}`}>
                <p className={styles._textBold}>{footer?.FooterContact?.Contact[0]?.email}</p>
              </a>
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
              <a className={styles._link} href={'https://www.instagram.com/_bananacreative/'} target='_blank' rel='noreferrer'>
                <p className={styles._textBold}>{footer?.FooterContact?.Contact[0]?.socialAccount}</p>
              </a>
            </div>
          </div>
          <div className={styles._contactNumber}>
            <div>
              <p className={styles._text}> </p>
            </div>
            <div>
              <p className={styles._text}> </p>
            </div>
            <div className={styles._copyright}>
              <p className={`${styles._text} ${styles._mr1}`}>{footer?.copyright}</p>
              <div className={styles._logoContainer}>
                <a href={'https://thecodeworkers.com'} target='_blank' rel='noreferrer' >
                  <Image src={tcw} alt={'tcw'} width={25} height={25} quality={100} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer
