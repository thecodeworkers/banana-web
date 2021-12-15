import { LogoBanana, Cart, Toggle } from '@icons/svg'
import { useDispatch, useSelector } from 'react-redux'
import { setStatus } from '@store/actions'
import { navigation, scrolling } from '@utils'
import { useRouter } from 'next/router'
import Clock from '../Clock'
import styles from './styles.module.scss'


const ScheduleNav = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { scrollReference: { buyRef, purposeRef, guestsRef } } = useSelector((state: any) => state)

  const openMenu = () => dispatch(setStatus({ classMenu: '_inAnimation' }))
  const navigate = () => { navigation('/', router) }

  return (
    <div className={styles._parent}>
      <div className={styles._parentChild}>
        <div className={styles._leftSide} onClick={navigate}>
          <div className={styles._icon}>
            <LogoBanana />
          </div>

        </div>

        <div className={styles._centerSide}>
          <ul className={styles._links}>
            <li onClick={() => scrolling(buyRef)}>Comprar</li>
            <li onClick={() => scrolling(purposeRef)}>Proposito </li>
            <li onClick={() => scrolling(guestsRef)}>Invitados</li>
          </ul>
        </div>

        <div className={styles._rightSide}>
          {/* <div className={styles._cartParent}>
            <Cart />
            <p>carrito</p>
          </div> */}
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
