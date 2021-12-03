import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { FirstBanner } from './elements'
import { fallbackRestUrl } from '../../utils/path'
import { Alert, DotsLine } from '@components'

const Home = () => {

  const { page: { home, footer } } = useSelector((state: any) => state)
  const banner = useRef()

  return (
    <>
      {home ?
        <div>
        <Alert />
        <FirstBanner />
        </div> : null
      }
    </>
  )
}

export default Home

