import { useRef } from 'react'
import { useSelector } from 'react-redux'
import {
  Banner, ClientsBanner, Contact, Hero, RecentsVideos,
  SecondBanner, ServicesBanner, TestimonialsBanner, ThirdBanner
} from './elements'
import { fallbackRestUrl } from '../../utils/path'
import { Alert, DotsLine } from '@components'

const Home = () => {

  const { page: { home, footer } } = useSelector((state: any) => state)
  const banner = useRef()
  const services = useRef()

  return (
    <>
      {home ?
        <div>
          <Alert />
          <DotsLine />
          <Hero content={home?.Hero} data={home?.Banner} contact={footer} reference={banner} serviceReference={services} />
          <div ref={banner}>
            <Banner withButton={home?.GifBanner?.button}
              background={`${fallbackRestUrl}${home?.GifBanner?.image?.url}`}
              responsiveImage={`${fallbackRestUrl}${home?.GifBanner?.imageResponsive?.url}`}
              buttonText={home?.GifBanner?.image?.textButton} method={''} />
          </div>
          <SecondBanner content={home?.SecondBanner} />
          {home?.serviceBanner && <div ref={services}><ServicesBanner content={home?.serviceBanner[0]} /></div>}
          {home?.serviceBanner && <ServicesBanner content={home?.serviceBanner[1]} />}
          <ThirdBanner content={home?.ThirdBanner} />
          <Contact content={home?.ContactBanner} />
          <RecentsVideos content={home?.VideoBanner} />
          <Banner withButton={home?.ClasroomBanner?.button}
            background={`${fallbackRestUrl}${home?.ClasroomBanner?.image?.url}`}
            responsiveImage={`${fallbackRestUrl}${home?.ClasroomBanner?.imageResponsive?.url}`}
            buttonText={home?.ClasroomBanner?.textButton} method={''} />
          <TestimonialsBanner content={home?.Testimonials} />
          <ClientsBanner content={home?.Clients} />
        </div> : null
      }
    </>
  )
}

export default Home

