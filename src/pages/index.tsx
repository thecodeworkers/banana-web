import { Home } from '@components'
import wrapper from '@store'
import { mapProps } from '@utils'
import { getPage } from '@store/actions'

const HomePage = () => (
  <Home />
)

export default HomePage

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    await mapProps(store, getPage({ query: 'home' }))
  }
)
