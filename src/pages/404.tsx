import { getPage } from '@store/actions'
import { useSelector } from 'react-redux'
import { Custom404, Fonts } from '@components'
import wrapper from '@store'
import { mapProps } from '@utils'

const Custom404Page = () => {
  const { font } = useSelector((state: any) => state)

  return (
    <>
      <Custom404 />
      <Fonts {...font} />
    </>
  )
}

export default Custom404Page

export const getStaticProps = wrapper.getStaticProps(
  (store) => async ({ req, res }) => {
    await mapProps(store, getPage({ query: 'custom404' }))
  }
)

