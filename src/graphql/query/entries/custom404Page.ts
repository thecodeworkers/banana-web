const custom404 = (locale) => `
  pagina404(locale: "${locale}") {
    title
    subtitle
    sendButton{
      text
      Link
    }
    image{
      url
      name
      ext
    }
      responsiveImage{
      url
      name
      ext
    }
  }
`

export default custom404
