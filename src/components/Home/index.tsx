import React from 'react';
import { Navbar, Footer } from '@components'
import {
  Banner, ClientsBanner, Contact, Hero, RecentsVideos,
  SecondBanner, ServicesBanner, TestimonialsBanner, ThirdBanner
} from './elements'

const Home = () => {

  return (
    <div >
      <Hero />
      <Banner withButton={false} background={'./Banner.gif'} buttonText={''} method={''} />
      <SecondBanner />
      <ServicesBanner background={'black'} />
      <ServicesBanner background={'white'} />
      <ThirdBanner />
      <Contact />
      <RecentsVideos />
      <Banner withButton={true} background={'./Classroom.png'} buttonText={'Banana Classroom'} method={''} />
      <TestimonialsBanner />
      <ClientsBanner />
    </div>
  )
}

export default Home;

