import wrapper from '@store'
import { mapProps } from '@utils'
import { getPage } from '@store/actions'
import { useSelector } from 'react-redux'
import { Confirm, Layout, Fonts } from '@components'

const HomePage = () => {
  const { font } = useSelector((state: any) => state)

  return (
    <>
      <Layout navFullWidth footer={false} menuLight>
        <Confirm />
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
