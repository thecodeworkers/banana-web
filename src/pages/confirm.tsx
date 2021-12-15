import { Home } from '@components'
import wrapper from '@store'
import { mapProps } from '@utils'
import { getPage } from '@store/actions'
import { useSelector } from 'react-redux'
import { fallbackRestUrl } from '@utils/path'
import { Confirm, Layout } from '@components'

const HomePage = () => {
  const { font: { bold, normal, light, medium } } = useSelector((state: any) => state)

  return (
    <>
      <Layout navFullWidth footer={false} menuLight>
        <Confirm />
      </Layout>
      <style jsx>{`
        @font-face {
          font-family: 'NormalFont';
          src: url('${fallbackRestUrl}${normal?.url}');
        }
        @font-face {
          font-family: 'BoldFont';
          src: url('${fallbackRestUrl}${bold?.url}');
        }
        @font-face {
          font-family: 'LightFont';
          src: url('${fallbackRestUrl}${light?.url}');
        }
        @font-face {
          font-family: 'MediumFont';
          src: url('${fallbackRestUrl}${medium?.url}');
        }`}
      </style>
    </>
  )
}

export default HomePage

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    await mapProps(store, getPage({ query: 'home' }))
  }
)
