import { Navbar, Footer, Menu } from '@components'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Menu />
      { children }
      <Footer />
    </>
  )
}

export default Layout
