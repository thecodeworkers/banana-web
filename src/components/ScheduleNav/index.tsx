import styles from './styles.module.scss'
import { LogoBanana, Cart, Toggle } from '@icons/svg'
import { useDispatch } from 'react-redux'
import { setStatus } from '@store/actions'

import Clock from '../Clock'

const ScheduleNav = () => {

  const dispatch = useDispatch()
  const openMenu = () => dispatch(setStatus({ classMenu: '_inAnimation' }))

  return (
    <div className={styles._parent}>
      <div className={styles._parentChild}>
        <div className={styles._leftSide}>
          <LogoBanana />
        </div>

        <div className={styles._centerSide}>
          <ul className={styles._links}>
            <li>Comprar</li>
            <li>Proposito </li>
            <li>Invitados</li>
          </ul>
        </div>

        <div className={styles._rightSide}>
          <div className={styles._cartParent}>
            <Cart />
            <p>carrito</p>
          </div>
          <div className={styles._clockParent}>
            <Clock font='LightFont' />
          </div>
          <div className={styles._toggleParent} onClick={openMenu} >
            <Toggle theme='light' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleNav
