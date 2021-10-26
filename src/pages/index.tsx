import {
  Navbar, Hero, Banner, ServicesBanner,
  SecondBanner, ThirdBanner, Contact, ClientsBanner, Footer,
  RecentVideos, Testimonials
} from '@components'
import { useSelector } from 'react-redux'
import { fallbackRestUrl } from '@utils/path'
import wrapper from '@store'
import { mapProps } from '@utils'
import { getPage } from '@store/actions'

const HomePage = () => {
  const { font: { bold, normal, light } } = useSelector((state: any) => state)

  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Banner withButton={false} background={'./Banner.gif'} buttonText={''} method={''} />
        <SecondBanner />
        <ServicesBanner background={'black'} />
        <ServicesBanner background={'white'} />

        {/* <ThirdBanner /> */}
        <Contact />
        <RecentVideos />
        <Banner withButton={true} background={'./Classroom.png'} buttonText={'Banana Classroom'} method={''} />
        <Testimonials />
        <ClientsBanner />
        <Footer />
      </div >
      <style jsx>{`
        @font-face {
          font-family: 'NormalFont';
          src: url('${fallbackRestUrl}${normal?.url}');
        }
        @font-face {
          font-family: 'BoldFont';
          src: url('${fallbackRestUrl}${bold?.url}');
        }
        @font-face {
          font-family: 'LightFont';
          src: url('${fallbackRestUrl}${light?.url}');
        }
        `}
      </style>
    </div >
  )
}

export default HomePage

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    await mapProps(store, getPage())
  }
)
