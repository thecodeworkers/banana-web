import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { GeneralButton, ModalLayout } from '@components'
import { formikConfig } from './formik'
import { PaymentMethod } from './elements'
import { useSelector, useDispatch } from 'react-redux'
import { setStatus, setUserData } from '@store/actions'
import { useRouter } from 'next/router'

const ClientForm = () => {

  const router = useRouter()
  const [showPayment, setShowPayment] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const formik = formikConfig(dispatch, setShowPayment, showPayment, isLoading, setIsLoading)
  const { intermittence: { formModal, selectedLanguage, scheduleNumber, alert }, userData } = useSelector((state: any) => state)

  const returnInputStyles = (key: string) => {
    if (formik.errors[key] && formik.touched[key]) return styles._inputError
    return styles._input
  }

  useEffect(() => {
    if (userData?.success) {
      dispatch(setStatus({ formModal: false }))
      redirectAndSendMessage()
      formik.resetForm()
      setIsLoading(false)
    }
  }, [userData?.success])

  useEffect(() => {
    if (!formModal && showPayment) {
      setShowPayment(false)
      formik.resetForm()
    }
  }, [formModal])

  const redirectAndSendMessage = () => {
    window.open(`https://api.whatsapp.com/send?phone=+584124731515&text=¡Hola, team Banana! Me gustaría apoyar la iniciativa Agenda Una Beca. %0A%0A Mi nombre completo es: ${userData?.userData?.name} ${userData?.userData?.lastname} %0A Cédula: ${userData?.userData?.document} %0A Dirección: ${userData?.userData?.address} %0A Teléfono: ${userData?.userData?.phone} %0A Correo: ${userData?.userData?.email}  %0A Cantidad: ${scheduleNumber} Método de pago: ${userData?.userData?.paymentMethod}`)
    router.push('/')
    dispatch(setUserData({ success: false }))
    dispatch(setStatus({ alert: { ...alert, status: 0 } }))
  }

  return (
    <>
      {formModal &&
        <ModalLayout>
          <div className={styles._parent}>
            <form className={styles._form} onSubmit={formik.handleSubmit}>
              {!showPayment ? <>
                <h1 className={styles._title}> {selectedLanguage == 'es' ? 'Tus datos' : 'Your data'}</h1>
                <div className={styles._row}>
                  <div className={styles._columnThird}>
                    <label className={styles._label}>{selectedLanguage == 'es' ? 'Nombre' : 'Name'}</label>
                    <input
                      className={returnInputStyles('name')}
                      id="name"
                      name="name"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}>
                    </input>
                  </div>
                  <div className={styles._columnThird}>
                    <label className={styles._label}>{selectedLanguage == 'es' ? 'Apellido' : 'Lastname'}</label>
                    <input
                      className={returnInputStyles('lastname')}
                      id="lastname"
                      name="lastname"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastname}>
                    </input>
                  </div>
                  <div className={styles._columnThird}>
                    <label className={styles._label}>{selectedLanguage == 'es' ? 'Cédula' : 'Identification card'} </label>
                    <input
                      id="document"
                      name="document"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.document}
                      className={returnInputStyles('document')}>
                    </input>
                  </div>
                </div>
                <div className={styles._row}>
                  <div style={{ width: '100%' }}>
                    <label className={styles._label}>{selectedLanguage == 'es' ? 'Dirección (zona, urbanización, calle, casa/edificio)' : 'Address (area, urbanization, street, house / building)'}</label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address}
                      className={returnInputStyles('address')}>
                    </input>
                  </div>
                </div>
                <div className={styles._row}>
                  <div className={styles._columnMiddle}>
                    <label className={styles._label}>{selectedLanguage == 'es' ? 'Correo' : 'Email'}</label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className={returnInputStyles('email')}>
                    </input>
                  </div>
                  <div className={styles._columnMiddle}>
                    <label className={styles._label}>{selectedLanguage == 'es' ? 'Teléfono' : 'Phone'}</label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      className={returnInputStyles('phone')}>
                    </input>
                  </div >
                </div >
              </> : <PaymentMethod />
              }

              <div className={styles._btnParent}>
                <GeneralButton text={selectedLanguage == 'es' ? 'Siguiente' : 'Next'} type='submit' />
              </div>

            </form >
          </div >
        </ModalLayout >
      }
    </>
  )
}

export default ClientForm
