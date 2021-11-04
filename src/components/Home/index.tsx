import React from 'react'
import { Navbar, Footer } from '@components'
import { useSelector } from 'react-redux'
import {
  Banner, ClientsBanner, Contact, Hero, RecentsVideos,
  SecondBanner, ServicesBanner, TestimonialsBanner, ThirdBanner
} from './elements'
import {fallbackRestUrl} from '../../utils/path'

const Home = () => {

  const { page: { home } } = useSelector((state: any) => state)

  return (
    <div >
      <Navbar />
      <Hero content={home?.Hero} data={home?.Banner}/>
      <Banner withButton={home?.GifBanner?.button} background={`${fallbackRestUrl}${home?.GifBanner?.image?.url}`} buttonText={home?.GifBanner?.image?.textButton} method={''} />
      <SecondBanner content={home?.SecondBanner}/>
      <ServicesBanner content={home?.serviceBanner[0]} />
      <ServicesBanner  content={home?.serviceBanner[1]} />
      <ThirdBanner content={home?.ThirdBanner} />
      <Contact content={home?.ContactBanner} />
      <RecentsVideos content={home?.VideoBanner}  />
      <Banner withButton={home?.ClasroomBanner?.button} background={`${fallbackRestUrl}${home?.ClasroomBanner?.image?.url}`} buttonText={home?.ClasroomBanner?.textButton} method={''} />
      <TestimonialsBanner content={home?.Testimonials}/>
      <ClientsBanner content={home?.Clients} />
    </div>
  )
}

export default Home

