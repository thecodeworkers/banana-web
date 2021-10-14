import { Navbar, Hero } from '@components'

const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({ store }) => store.dispatch(getResources())
// )

export default HomePage
