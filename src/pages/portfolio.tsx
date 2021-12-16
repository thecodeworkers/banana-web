import { Portfolio } from '@components'
import wrapper from '@store'
import { mapProps } from '@utils'
import { getPage } from '@store/actions'
import { useSelector } from 'react-redux'
import { Layout, Fonts } from '@components'

const PortfolioPage = () => {
  const { font } = useSelector((state: any) => state)

  return (
    <>
      <Layout>
        <Portfolio />
      </Layout>
      <Fonts {...font} />
    </>
  )
}

export default PortfolioPage

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    await mapProps(store, getPage({ query: 'portfolio' }))
  }
)
