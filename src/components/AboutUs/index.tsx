import { Gallery, HeroAboutUs } from './elements'
import { Navbar } from '@components'
import Head from 'next/head'

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <Navbar />
      <HeroAboutUs />
      <Gallery />
    </>
  )
}

export default AboutUs
