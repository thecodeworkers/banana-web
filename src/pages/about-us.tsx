import { AboutUs } from '@components'
import wrapper from '@store'
import { mapProps } from '@utils'
import { getPage } from '@store/actions'
import { useSelector } from 'react-redux'
import { Layout, Fonts } from '@components'

const AboutUsPage = () => {
  const { font } = useSelector((state: any) => state)

  return (
    <>
      <Layout>
        <AboutUs />
      </Layout>
      <Fonts {...font} />
    </>
  )
}

export default AboutUsPage

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    const state = store.getState()
    const { intermittence: { selectedLanguage } } = state
    console.log('SELECTEEED BETA', selectedLanguage)
    await mapProps(store, getPage({ query: 'aboutUs', language: selectedLanguage }))
  }
)
