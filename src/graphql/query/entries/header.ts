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
    name
    subNav {
      name
      position
    }
    position
  }
}
`
export default header
