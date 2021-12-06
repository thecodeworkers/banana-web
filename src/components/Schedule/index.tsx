import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { FirstBanner, FourthBanner, ThirdBanner } from './elements'
import { fallbackRestUrl } from '../../utils/path'
import { Alert, DotsLine, ScheduleNav } from '@components'
import { SecondBanner } from './elements'

const Schedule = () => {

  const {page: { schedule } } = useSelector((state: any) => state)

    console.log(schedule);

  return (
    <>
      <div>
        <Alert />
        <ScheduleNav />
        <FirstBanner />
        <SecondBanner />
        <ThirdBanner />
        <FourthBanner  background={`images/gif-agenda.gif`} responsiveImage={``}  />
      </div>
    </>
  )
}

export default Schedule

