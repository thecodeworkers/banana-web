import styles from './styles.module.scss'
import { LogoBanana, Cart } from '@icons/svg'
import Clock from '../Clock'

const ScheduleNav = () => (
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
        <Clock font='LightFont' />
      </div>
    </div>
  </div>
)

export default ScheduleNav
