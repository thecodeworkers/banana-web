import { Gallery, HeroAboutUs } from './elements'
import { Navbar } from '@components'
import Head from 'next/head'
import { useSelector } from 'react-redux'

const AboutUs = () => {

  const {
    page: {
      aboutUs: { aboutHero, TeamGallery }
    }
  } = useSelector((state: any) => state)

  const {
    page: { aboutUs }
  } = useSelector((state: any) => state)

  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      {
        aboutUs && (
          <>
            <HeroAboutUs content={aboutHero} />
            <Gallery content={TeamGallery} />
          </>
        )
      }
    </>
  )
}

export default AboutUs
