import { useState } from 'react'
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import Image from 'next/image'

const Custom404 = () => {

  const [email, setEmail] = useState('')

  const inputHandler = (event: any) => {
    const { target: { value } } = event
    setEmail(value)
  }

  return (
    <div className={styles._main}>
      <div className={styles._topSection}></div>

      <div className={styles._bottomSection}>
        <div className={styles._newsletter}>
          <section>
            <h1 className={styles._title}>Coming soon</h1>
            <input className={styles._input} placeholder='email' value={email} onChange={inputHandler} />
            <p className={styles._text}>Regresa nuevamente cuando esta sección este lista. Dejanos tu correo para que seas notificado del lanzamiento
            </p>
            <div className={styles._parentBtn}>
              <GeneralButton
                textColor='#FFF'
                background='#000'
                icon
                text='Enviar'
              />
            </div>
          </section>
        </div>
        <footer className={styles._footer}>
          <div className={styles._footerContent}>
            <div className={styles._socialMedia}>
              <div className={styles._imgParent}>
                <Image src='/icons/behance-white.png' alt='instagram' width={23} height={23} quality={100} />
              </div>

              <div className={styles._imgParent}>
                <Image src='/icons/insta-white.png' alt='instagram' width={23} height={23} quality={100} />
              </div>

              <div className={styles._imgParent}>
                <Image src='/icons/linkedin-white.png' alt='instagram' width={23} height={23} quality={100} />
              </div>
            </div>

            <p>Banana creative. 2021 copyright ©</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Custom404
