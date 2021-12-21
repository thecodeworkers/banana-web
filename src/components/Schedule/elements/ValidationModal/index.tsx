import { ModalLayout, GeneralButton } from '@components'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setStatus } from '@store/actions'

const ValidationModal = () => {

  const dispatch = useDispatch()
  const { intermittence: { validationModal } } = useSelector((state: any) => state)

  return (
    <>
      {
        validationModal &&
        <ModalLayout showClose={false}>
          <div className={styles._main}>
            <p className={styles._message}>Debes seleccionar una agenda para poder continuar con tu proceso de compra</p>
            <div className={styles._btnParent}>
              <GeneralButton text='Entendido' icon={false} method={() => dispatch(setStatus({ validationModal: false }))} />
            </div>
          </div>
        </ModalLayout>
      }
    </>
  )
}

export default ValidationModal
