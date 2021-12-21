import { CloseIcon } from '@icons/svg'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import { setStatus } from '@store/actions'

const ModalLayout = ({ children = null, showClose = true }) => {

  const dispatch = useDispatch()
  const hideModal = () => dispatch(setStatus({ formModal: false }))

  return (
    <div className={styles._main}>
      <div className={styles._modal}>
        <div className={styles._closeBtn}>
          <div className={styles._iconParent} onClick={hideModal}>
            { showClose && <CloseIcon /> }
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default ModalLayout
