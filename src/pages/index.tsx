import { Navbar,Banner, ServicesBanner, SecondBanner,ThirdBanner } from '@components'

const HomePage = () => {
  return (
    <div>
      <div>
       <Navbar />
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
