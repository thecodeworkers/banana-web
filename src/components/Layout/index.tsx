import { Navbar, Footer, Menu, ScheduleNav } from '@components'

const Layout = ({ children, navFullWidth = false, footer = true, menuLight = false }) => {
  return (
    <>
      {!navFullWidth ? <Navbar /> : <ScheduleNav />}
      <Menu menuLight={menuLight} />
      {children}
      {footer && <Footer />}
    </>
  )
}

export default Layout
