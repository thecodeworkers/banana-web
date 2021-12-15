import { useSelector } from 'react-redux'
import { FirstBanner, FourthBanner, ThirdBanner } from './elements'
import { Alert, ScheduleNav, ClientForm } from '@components'
import { SecondBanner } from './elements'

const Schedule = () => {

  const { page: { schedule } } = useSelector((state: any) => state)

  return (
    <>
      {schedule && (
        <div>
          <Alert />
          <ClientForm />
          <ScheduleNav />
          <FirstBanner content={schedule?.scheduleFirstBanner} />
          <SecondBanner {...schedule?.scheduleSecondBanner} />
          {schedule?.Product && <ThirdBanner content={schedule?.Product[0]} data={schedule?.interBanner} />}
          <FourthBanner content={schedule?.fourthBanner} />
        </div>)
      }
    </>
  )
}

export default Schedule

