import {
  Navbar, Hero, Banner, ServicesBanner,
  SecondBanner, ThirdBanner, Contact, ClientsBanner, Footer,
  Testimonials
} from '@components'




const HomePage = () => {
  return (
    <div>
      <div>
         <Navbar />
         {/* <Hero /> */}
       <Banner withButton={false} background={'./Banner.gif'} buttonText={''} method={''} />
        <SecondBanner />
        {/* <ServicesBanner background={'black'} />
        <ServicesBanner background={'white'} /> */}

      {/* <ThirdBanner /> */}
        <Contact/>
        <Banner withButton={true} background={'./Classroom.png'} buttonText={'Banana Classroom'} method={''}/>
        <Testimonials/>
        <ClientsBanner />
        <Footer />
      </div >
    </div >
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({ store }) => store.dispatch(getResources())
// )

export default HomePage
