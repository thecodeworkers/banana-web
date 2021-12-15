import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Banner, ClientsBanner, Contact, Hero, RecentsVideos,
  SecondBanner, ServicesBanner, TestimonialsBanner, ThirdBanner
} from './elements'
import { fallbackRestUrl } from '../../utils/path'
import { Alert, DotsLine } from '@components'
import { scrollTo } from '@utils'

const Home = () => {
  const { page: { home, footer }, scrollReference: { homeReference } } = useSelector((state: any) => state)

  const banner = useRef()

  const heroRef = useCallback((node) => {
    scrollingReference(node, 'hero')
  }, [homeReference?.hero])

  const servicesRef = useCallback((node) => {
    scrollingReference(node, 'services')
  }, [homeReference?.services])

  const scrollingReference = (node, state) => {
    if(homeReference?.current == state) {
      if(node) scrollTo(node)
    }
  }

  return (
    <>
      {home ?
        <div>
          <Alert />
          <DotsLine />
          <div ref={heroRef}>
            <Hero content={home?.Hero} data={home?.Banner} contact={footer} reference={banner} />
          </div>
          <div ref={banner}>
            <Banner withButton={home?.GifBanner?.button}
              background={`${fallbackRestUrl}${home?.GifBanner?.image?.url}`}
              responsiveImage={`${fallbackRestUrl}${home?.GifBanner?.imageResponsive?.url}`}
              buttonText={home?.GifBanner?.image?.textButton} method={''} />
          </div>
          <SecondBanner content={home?.SecondBanner} />
          {home?.serviceBanner && <div ref={servicesRef}><ServicesBanner content={home?.serviceBanner[0]} /></div>}
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
