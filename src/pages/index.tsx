import { Navbar, Hero, Banner, ServicesBanner, SecondBanner, ThirdBanner } from '@components'

const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Banner />
        <SecondBanner />
        <ServicesBanner background={'black'} />
        <ServicesBanner background={'white'} />
        <ThirdBanner />
      </div>
    </div>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({ store }) => store.dispatch(getResources())
// )

export default HomePage
