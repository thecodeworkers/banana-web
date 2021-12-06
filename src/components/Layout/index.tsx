import { Navbar, Footer, Menu, ScheduleNav } from '@components'

const Layout = ({ children, navFullWidth = false, footer = true }) => {
  return (
    <>
      {!navFullWidth ? <Navbar /> : <ScheduleNav />}
      <Menu />
      {children}
      {footer && <Footer />}
    </>
  )
}

export default Layout
