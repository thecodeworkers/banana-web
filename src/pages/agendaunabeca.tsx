import { Schedule } from '@components'
import wrapper from '@store'
import { mapProps } from '@utils'
import { getPage } from '@store/actions'
import { useSelector } from 'react-redux'
import { Layout, Fonts } from '@components'

const SchedulePage = () => {
  const { font } = useSelector((state: any) => state)

  return (
    <>
      <Layout navFullWidth menuLight>
        <Schedule />
      </Layout>
      <Fonts {...font} />
    </>
  )
}

export default SchedulePage

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    await mapProps(store, getPage({ query: 'schedule' }))
  }
)

