import { Navbar,Banner, ServicesBanner, SecondBanner } from '@components'

const HomePage = () => {
  return (
    <div>
      <div>
       <Navbar />
       <Banner />
       <SecondBanner />
       <ServicesBanner background={'black'} />
       <ServicesBanner background={'white'} />

      </div>
    </div>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({ store }) => store.dispatch(getResources())
// )

export default HomePage
