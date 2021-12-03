import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { FirstBanner } from './elements'
import { fallbackRestUrl } from '../../utils/path'
import { Alert, DotsLine, ScheduleNav } from '@components'
import { SecondBanner } from './elements'

const Schedule = () => {
  return (
    <>
      <div>
        <Alert />
        <ScheduleNav />
        <SecondBanner />
        <FirstBanner />
      </div>
    </>
  )
}

export default Schedule

