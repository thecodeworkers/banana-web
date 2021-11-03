import React from 'react'
import { Navbar, Footer } from '@components'
import { serviceData } from './data'
import { serviceDataTwo } from './dataTwo'
import {
  Banner, ClientsBanner, Contact, Hero, RecentsVideos,
  SecondBanner, ServicesBanner, TestimonialsBanner, ThirdBanner
} from './elements'

const Home = () => {

  return (
    <div >
      <Navbar />
      <Hero />
      <Banner withButton={false} background={'./Banner.gif'} buttonText={''} method={''} />
      <SecondBanner />
      <ServicesBanner background={'black'} data={serviceData} />
      <ServicesBanner background={'white'} data={serviceDataTwo} />
      <ThirdBanner />
      <Contact />
      <RecentsVideos />
      <Banner withButton={true} background={'./Classroom.png'} buttonText={'Banana Classroom'} method={''} />
      <TestimonialsBanner />
      <ClientsBanner />
      <Footer />
    </div>
  )
}

export default Home

