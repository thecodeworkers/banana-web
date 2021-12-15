import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { GeneralButton, ModalLayout } from '@components'
import { formikConfig } from './formik'
import { PaymentMethod } from './elements'
import { useSelector, useDispatch } from 'react-redux'
import { setStatus } from '@store/actions'
import { useRouter } from 'next/router'

const ClientForm = () => {

  const router = useRouter()
  const [showPayment, setShowPayment] = useState(false)
  const dispatch = useDispatch()
  const formik = formikConfig(dispatch, setShowPayment, showPayment)
  const { intermittence: { formModal }, userData } = useSelector((state: any) => state)

  const returnInputStyles = (key: string) => {
    if (formik.errors[key] && formik.touched[key]) return styles._inputError
    return styles._input
  }

  useEffect(() => {
    if (userData?.success) {
      dispatch(setStatus({ formModal: false }))
      router.push('/confirm')
      formik.resetForm()
    }
  }, [userData?.success])

  useEffect(() => {
    if (!formModal && showPayment) {
      setShowPayment(false)
      formik.resetForm()
    }
  }, [formModal])

  return (
    <>
      {formModal &&
        <ModalLayout>
          <div className={styles._parent}>
            <form className={styles._form} onSubmit={formik.handleSubmit}>
              {!showPayment ? <>
                <h1 className={styles._title}> Tus datos </h1>
                <div className={styles._row}>
                  <div className={styles._columnThird}>
                    <label className={styles._label}>Nombre</label>
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
                    <label className={styles._label}>Apellido</label>
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
                    <label className={styles._label}>Cedula</label>
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
                    <label className={styles._label}>Dirección (zona, urbanización, calle, casa/edificio)</label>
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
                    <label className={styles._label}>Email</label>
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
                    <label className={styles._label}>Telefono</label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      className={returnInputStyles('phone')}>
                    </input>
                  </div>
                </div>
              </> : <PaymentMethod />
              }

              <div className={styles._btnParent}>
                <GeneralButton text='Siguiente' type='submit' />
              </div>

            </form>
          </div>
        </ModalLayout>
      }
    </>
  )
}

export default ClientForm
