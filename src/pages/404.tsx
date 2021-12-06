import { useEffect } from 'react'
import wrapper from '@store'
import { mapProps } from '@utils'
import { getPage } from '@store/actions'
import { useSelector } from 'react-redux'
import { fallbackRestUrl } from '@utils/path'
import { Custom404, Layout } from '@components'

const Custom404Page = () => {

  const { font: { bold, normal, light, medium } } = useSelector((state: any) => state)


  return (
    <>
      <Layout footer={false} navFullWidth>
        <Custom404 />
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
          font-family: 'NormalFont';
          src: url('${fallbackRestUrl}${medium?.url}');
        }`}
      </style>
    </>
  )
}

export default Custom404Page

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async ({ req, res }) => {
//     await mapProps(store, getPage({ query: 'aboutUs' }))
//   }
// )

export async function getStaticProps() {
  (store) => async ({ req, res }) => {
    await mapProps(store, getPage({ query: 'aboutUs' }))
  }
}
