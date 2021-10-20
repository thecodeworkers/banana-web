import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '@icons/banana-creative.png'
import behance from '@icons/behance.png'
import instagram from '@icons/instagram.png'
import linkedin from '@icons/linkedin.png'
import tcw from  '@icons/tcw-logo.svg'
const Footer = () => {

  const sections =
    [
      { route: 'Home' },
      { route: 'Servicios' },
      { route: 'Team' },
      { route: 'Portfolio' },
      { route: 'Blog' },
      { route: 'Classroom' },
    ]

  return (
    <div className={styles._container}>
      <div className={styles._head}>
        <div>
          <Image src={logo} alt={'banana-creative'} width={173} height={17} quality={100} />
        </div>
        <div className={styles._socialBanner}>
          <div className={styles._socialMedia}>
            <Image src={linkedin} alt={'linkedine'} width={19} height={19} quality={100} />
            <Image src={behance} alt={'behance'} width={28} height={19} quality={100} />
            <Image src={instagram} alt={'instagram'} width={23} height={23} quality={100} />
          </div>

        </div>
        <div className={styles._sectionsContainer}>
          {sections.map(function (item, index) {
            return (
              <div key={index}>
                <p className={styles._sections}>{item.route}</p>
              </div>
            )
          })
          }
        </div>
        <hr className={styles._line}></hr>
        <div className={styles._contactContainer}>
          <div className={styles._contactNumber}>
            <div>
              <p className={`${styles._text} ${styles._mb1}`}>Contacto:</p>
            </div>
            <div>
              <p className={styles._text}>+58 424 837 8858</p>
            </div>
            <div>
              <p className={styles._text}>+58 424 187 2382</p>
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

          <div className={styles._contactNumber}>
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
            <div>
              <p className={styles._text}>Banana Creative. 2021 Copyright ©</p>
            </div>
          </div>

          <div className={styles._logoContainer}>
            <Image src={tcw} alt={'tcw'} width={40} height={40} quality={100} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
