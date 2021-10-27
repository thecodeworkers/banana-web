import { Gallery } from './elements'
import Head from 'next/head'
import { Hero } from '@components'

const AboutUs = () => {

  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <Hero />
      <Gallery />
    </>
  )
}

export default AboutUs
