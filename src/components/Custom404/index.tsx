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

  const send = () => dispatch(saveContact(email))

  useEffect(() => {
    if (success) setEmail('')
  }, [success])

  return (
    <>
      <div className={styles._main}>
        <Alert />
        <div className='_topSection'></div>
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
              </div>
              <p>{footer?.copyright}</p>
            </div>
          </footer>
        </div>
      </div>

      <style jsx>{`
        ._topSection {
          height: 40%;
          width: 100%;
          background-image: url(${fallbackRestUrl}${custom404?.image?.url});
          background-size: cover;
          background-position: center;
        }
      `}
      </style>
    </>
  )
}

export default Custom404
