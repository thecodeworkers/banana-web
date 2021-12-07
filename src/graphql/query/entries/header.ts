const header = (locale) => `
header(locale: "${locale}") {
  logo {
    ext
    url
    name
  }
  social {
    url
    name
    icon {
      url
      ext
      name
    }
    position
  }
  navigation {
    route {
      name
      position
      link
    }
  }
}
`
export default header
