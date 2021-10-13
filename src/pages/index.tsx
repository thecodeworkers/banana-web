import { Banner, ServicesBanner } from "../components"
import { Navbar } from '@components'

const HomePage = () => {
  return (
    <div>
      <div>
       <Navbar />
       <Banner />
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
