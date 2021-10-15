import { Navbar, Hero, Contact } from '@components'

const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Contact />
      </div>
    </div>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({ store }) => store.dispatch(getResources())
// )

export default HomePage
