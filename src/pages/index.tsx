import { Home } from '@components'
import wrapper from '@store'
import { mapProps } from '@utils'
import { getPage } from '@store/actions'
import { useSelector } from 'react-redux'
import { fallbackRestUrl } from '@utils/path'
import { Layout, Fonts } from '@components'

const HomePage = () => {
  const { font } = useSelector((state: any) => state)

  return (
    <>
      <Layout>
        <Home />
      </Layout>
      <Fonts {...font} />
    </>
  )
}

export default HomePage

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    await mapProps(store, getPage({ query: 'home' }))
  }
)
