import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FirstBanner, FourthBanner, ThirdBanner } from './elements'
import { Alert, ScheduleNav } from '@components'
import { SecondBanner } from './elements'
import { setReference } from '@store/actions'

const Schedule = () => {
  const { page: { schedule } } = useSelector((state: any) => state)
  const dispatch = useDispatch()

  const buyRef = useRef()
  const guestsRef = useRef()

  useEffect(() => {
    dispatch(setReference({ buyRef, guestsRef }))
    return () => { dispatch(setReference({ buyRef: null, guestsRef: null })) }
  }, [])

  return (
    <>
      {schedule && (
        <div>
          <Alert />
          <ScheduleNav />
          <FirstBanner content={schedule?.scheduleFirstBanner} />
          <SecondBanner {...schedule?.scheduleSecondBanner} />
          {
            schedule?.Product && (
              <div ref={buyRef}>
                <ThirdBanner content={schedule?.Product[0]} data={schedule?.interBanner} />
              </div>
            )
          }
          <div ref={guestsRef}>
            <FourthBanner content={schedule?.fourthBanner} />
          </div>
        </div>)
      }
    </>
  )
}

export default Schedule
