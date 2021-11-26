import { useEffect } from 'react'
import { Grid } from './elements'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
import { setStatus } from '@store/actions'


const Portfolio = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setStatus({ theme: 'dark' }))
    return () => dispatch(setStatus({ theme: 'light' }))
  }, [])

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Grid />
    </>
  )
}

export default Portfolio
