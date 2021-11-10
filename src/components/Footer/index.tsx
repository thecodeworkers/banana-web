import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '@icons/banana-creative.png'
import tcw from '@icons/tcw-logo.svg'
import { useSelector } from 'react-redux'
import { fallbackRestUrl } from '../../utils/path'

const Footer = () => {

  const { page: { footer } } = useSelector((state: any) => state)

  return (
    <div className={styles._container}>
      <div className={styles._head}>
        <div>
          <Image src={logo} alt={'banana-creative'} width={173} height={17} quality={100} />
        </div>
        <div className={styles._socialBanner}>
          <div className={styles._socialMedia}>
            {footer?.social?.map(function (item, index) {
              return (
                item?.name?.split('-')?.[1] == 'white' ?
                  <div key={index}>
                    <Image src={`${fallbackRestUrl}${item?.icon?.url}`} alt={item?.icon?.name} width={25} height={25} quality={100} />
                  </div>
                  : null
              )
            }
            )}
          </div>

        </div>
        <div className={styles._sectionsContainer}>
          {footer?.sections.map(function (item, index) {
            return (
              <div key={index}>
                <p className={styles._sections}>{item.name}</p>
              </div>
            )
          })
          }
        </div>
        <hr className={styles._line}></hr>
        <div className={styles._contactContainer}>
          <div className={styles._contactNumber}>
            <div>
              <p className={`${styles._text} ${styles._mb1}`}>{footer?.FooterContact?.Contact[0]?.titleNumbers}</p>
            </div>
            <div className={styles._numbers}>
              <p className={`${styles._text} ${styles._mb1}`}>{footer?.FooterContact?.Contact[0]?.phoneOne}</p>
              <p className={`${styles._text} ${styles._mb1}`}>{footer?.FooterContact?.Contact[0]?.phoneTwo}</p>
            </div>
          </div>

          <div className={styles._contactMail}>
            <div>
              <p className={styles._text}>{footer?.FooterContact?.Contact[0]?.titleEmail}</p>
            </div>
            <div>
              <p className={styles._text}>{footer?.FooterContact?.Contact[0]?.subtitleSocial}</p>
            </div>
            <div>
              <p className={styles._text}> </p>
            </div>
            <div>
              <p className={styles._text}>{footer?.FooterContact?.Contact[0]?.email}</p>
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
              <p className={styles._text}> </p>
            </div>
            <div>
              <p className={styles._text}>{footer?.FooterContact?.Contact[0]?.socialAccount}</p>
            </div>
          </div>

          <div className={styles._contactNumber}>
            <div>
              <p className={styles._text}> </p>
            </div>
            <div>
              <p className={styles._text}> </p>
            </div>
            <div>
              <p className={styles._text}> </p>
            </div>
            <div className={styles._copyright}>
              <p className={styles._text}>{footer?.copyright}</p>
              <div className={styles._logoContainer}>
                <Image src={tcw} alt={'tcw'} width={25} height={25} quality={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer
