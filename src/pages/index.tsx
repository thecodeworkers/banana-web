import { Banner, ServicesBanner } from "../components"


const HomePage = () => {
  return (
   
      <div>
       <Banner />
       <ServicesBanner background={'black'} />
       <ServicesBanner background={'white'} />
      </div>
   
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({ store }) => store.dispatch(getResources())
// )

export default HomePage