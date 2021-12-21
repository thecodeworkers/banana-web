import { useEffect } from 'react'
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { setStatus, setUserData } from '@store/actions'

const Confirm = () => {

  const dispatch = useDispatch()
  const router = useRouter()
  const { userData, intermittence: { scheduleNumber, alert } } = useSelector((state: any) => state)

  const redirectAndSendMessage = () => {
    router.push('/')
    dispatch(setUserData({ success: false }))
    dispatch(setStatus({ alert: { ...alert, status: 0 } }))
  }

  useEffect(() => {
    return () => {
      dispatch(setUserData({ success: false }))
      dispatch(setStatus({ alert: { ...alert, status: 0 } }))
    }
  }, [])

  return (
    <div className={styles._main}>
      <div className={styles._content}>
        <h1 className={styles._title}>Hablemos por WhatsApp</h1>
        <p className={styles._text} >Podemos proceder a gestionar tu pago a través de una conversación con nuestro equipo de atención a clientes. </p>
        <div className={styles._btnParent}>
          <a href={`https://wa.me/584124731515?text=¡Hola, team Banana! Me gustaría apoyar la iniciativa Agenda Una Beca. %0A%0A Mi nombre completo es: ${userData?.userData?.name} ${userData?.userData?.lastname} %0A Cédula: ${userData?.userData?.document} %0A Dirección: ${userData?.userData?.address} %0A Teléfono: ${userData?.userData?.phone} %0A Correo: ${userData?.userData?.email}  %0A Cantidad: ${scheduleNumber} Método de pago: ${userData?.userData?.paymentMethod}`}
            target='_blank' rel="noreferrer">
            <GeneralButton background='#FFF' text='Haz click aquí' icon={false} textColor='black' method={redirectAndSendMessage} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Confirm
