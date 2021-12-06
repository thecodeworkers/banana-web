import { useEffect } from 'react'
import { getPage } from '@store/actions'
import { useSelector, useDispatch } from 'react-redux'
import { fallbackRestUrl } from '@utils/path'
import { Custom404, Layout } from '@components'
import { GetStaticPaths } from 'next'

const Custom404Page = () => {

  const dispatch = useDispatch()
  const { font: { bold, normal, light, medium } } = useSelector((state: any) => state)

  useEffect(() => {
    dispatch(getPage({ query: 'aboutUs' }))
  }, [])

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

export const getStaticPaths: any = async () => {
  return { url: '404', fallback: true }
}

