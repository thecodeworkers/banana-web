const header = (locale) => `
header(locale: "${locale}") {
  navigations{
    route{
     name
     link
   }
  }
}
`
export default header
