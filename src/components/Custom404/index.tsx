import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { fallbackRestUrl } from '../../utils/path'
import { saveContact } from '@store/actions'
import Alert from '../Alert'

const Custom404 = () => {
  const { page: { custom404, footer }, newsletter: { success } } = useSelector((state: any) => state)
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()

  const inputHandler = (event: any) => {
    const { target: { value } } = event
    setEmail(value)
  }

  const send = () => {
    dispatch(saveContact(email))
  }

  useEffect(() => {
    if (success) setEmail('')
  }, [success])

  return (
    <div className={styles._main}>
      <Alert />
      <div className={styles._topSection}></div>

      <div className={styles._bottomSection}>
        <div className={styles._newsletter}>
          <section>
            <h1 className={styles._title}>{custom404?.title}</h1>
            <input className={styles._input} placeholder='Ingresa tu correo' value={email} onChange={inputHandler} />
            <p className={styles._text}>{custom404?.subtitle}</p>
            <div className={styles._parentBtn}>
              <GeneralButton
                textColor='#FFF'
                background='#000'
                icon
                text={custom404?.sendButton?.text}
                method={() => send()}
              />
            </div>
          </section>
        </div>
        <footer className={styles._footer}>
          <div className={styles._footerContent}>
            <div className={styles._socialMedia}>
              {footer?.social?.map(function (item, index) {
                return (
                  item?.name?.split('-')?.[1] == 'black' ?
                    <div key={index}>
                      <a href={item?.url} target='_blank' rel='noreferrer' >
                        <Image src={`${fallbackRestUrl}${item?.icon?.url}`} alt={item?.icon?.name} width={25} height={25} quality={100} />
                      </a>
                    </div>
                    : null
                )
              }
              )}
              {/* <div className={styles._imgParent}>
                <Image src='/icons/behance-white.png' alt='instagram' width={23} height={23} quality={100} />
              </div>

              <div className={styles._imgParent}>
                <Image src='/icons/insta-white.png' alt='instagram' width={23} height={23} quality={100} />
              </div>

              <div className={styles._imgParent}>
                <Image src='/icons/linkedin-white.png' alt='instagram' width={23} height={23} quality={100} />
              </div> */}
            </div>

            <p>{footer?.copyright}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Custom404
