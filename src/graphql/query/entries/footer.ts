const footer = (locale) => `
footer(locale: "${locale}") {
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
      subtitleSocial
      contactMail
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
