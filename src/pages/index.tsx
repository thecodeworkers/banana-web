import {
  Navbar, Hero, Banner, ServicesBanner,
  SecondBanner, ThirdBanner, Contact
} from '@components'



const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Banner withButton={false} background={'./Banner.png'} buttonText={''} method={''} />
        <SecondBanner />
        <ServicesBanner background={'black'} />
        <ServicesBanner background={'white'} />
        <ThirdBanner />
        <Banner withButton={true} background={'./Classroom.png'} buttonText={'Banana Classroom'} method={''}/>
        <Contact/>
      </div >
    </div >
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({ store }) => store.dispatch(getResources())
// )

export default HomePage
