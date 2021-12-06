import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { FirstBanner, FourthBanner, ThirdBanner } from './elements'
import { fallbackRestUrl } from '../../utils/path'
import { Alert } from '@components'

const Schedule = () => {

  // const { page: { home, footer } } = useSelector((state: any) => state)


  return (
    <>
        <div>
          <Alert />
          <FirstBanner />
          <ThirdBanner />
          <FourthBanner withButton={false} background={`images/gif-agenda.gif`}
          responsiveImage={``} buttonText={''} method={''} />
        </div>
    </>
  )
}

export default Schedule

