import React from 'react'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setStatus } from '@store/actions'

const CountProduct = () => {
  const dispatch = useDispatch()
  const { intermittence: { scheduleNumber } } = useSelector((state: any) => state)

  const increment = () => dispatch(setStatus({ scheduleNumber: scheduleNumber + 1 }))

  const decrement = () => {
    if (scheduleNumber >= 1) dispatch(setStatus({ scheduleNumber: scheduleNumber - 1 }))
  }

  return (
    <>
      <div className={styles._numberParent}>
        <div className={styles._square} onClick={decrement}>
          <p>-</p>
        </div>
        <div className={styles._countParent}>
          <p className={styles._input}>{scheduleNumber}</p>
        </div>
        <div className={styles._square} onClick={increment}>
          <p>+</p>
        </div>
      </div>
    </>
  )
}

export default CountProduct
