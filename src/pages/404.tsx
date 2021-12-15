import { getPage } from '@store/actions'
import { useSelector } from 'react-redux'
import { fallbackRestUrl } from '@utils/path'
import { Custom404, Layout } from '@components'
import wrapper from '@store'
import { mapProps } from '@utils'

const Custom404Page = () => {
  const { font: { bold, normal, light, medium } } = useSelector((state: any) => state)

  return (
    <>
      <Custom404 />
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

export const getStaticProps = wrapper.getStaticProps(
  (store) => async ({ req, res }) => {
    await mapProps(store, getPage({ query: 'custom404' }))
  }
)

