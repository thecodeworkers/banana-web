import {
  Navbar, Hero, Banner, ServicesBanner,
  SecondBanner, ThirdBanner, Contact, ClientsBanner, Footer,
  Testimonials, RecentVideos
} from '@components'
import { useSelector } from 'react-redux'
import { fallbackRestUrl } from '@utils/path'

const HomePage = () => {
  const { font: { italic, normal }} = useSelector((state: any) => state)

 console.log(italic, 'italic');

  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Banner withButton={false} background={'./Banner.gif'} buttonText={''} method={''} />
        <SecondBanner />
        <ServicesBanner background={'black'} />
        <ServicesBanner background={'white'} />

        <ThirdBanner />
        <Contact />
        <RecentVideos />
        <Banner withButton={true} background={'./Classroom.png'} buttonText={'Banana Classroom'} method={''} />
        <Testimonials />
        <ClientsBanner />
        <Footer />
      </div >
      <style jsx>{`
        @font-face {
          font-family: 'ItalicFont';
          src: url('${fallbackRestUrl}${italic?.url}');
        }

        @font-face {
          font-family: 'NormalFont';
          src: url('${fallbackRestUrl}${normal?.url}');
        }
        `}
        </style>
    </div >
  )
}

export default HomePage
