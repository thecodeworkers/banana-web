const footer = (locale) => `
footer(locale: "es") {
  copyright
  locale
  FooterContact {
    Contact {
      email
      phoneOne
      phoneTwo
      titleEmail
      titleSocial
      titleNumbers
      socialAccount
    }
  }
  sections {
    name
    route
  }
  social {
    id
    name
    icon {
      url
      ext
      name
    }
    url
    position
  }
}
`

export default footer
