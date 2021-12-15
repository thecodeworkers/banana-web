import React from 'react'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
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
        <input type='text' value={scheduleNumber} readOnly className={styles._input}></input>
        <div className={styles._square} onClick={increment}>
          <p>+</p>
        </div>
      </div>
    </>
  )
}

export default CountProduct
