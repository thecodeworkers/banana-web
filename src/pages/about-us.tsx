import { AboutUs } from '@components'
import wrapper from '@store'
import { mapProps } from '@utils'
import { getPage } from '@store/actions'

const AboutUsPage = () => {
  return (
    <AboutUs  />
  )
}

export default AboutUsPage

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    await mapProps(store, getPage({ query: 'aboutUs' }))
  }
)
