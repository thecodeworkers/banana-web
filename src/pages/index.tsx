import { Navbar } from '@components'

const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
    </div>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({ store }) => store.dispatch(getResources())
// )

export default HomePage
