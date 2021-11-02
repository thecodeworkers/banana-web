const homePage = (locale) => `
page:homePage(locale: "${locale}") {
  locale
  Banner {
    image {
      url
      name
      ext
    }
    imageResponsive {
      url
      name
      ext
    }
    position
    fullWidth
    button
    textButton
  }
  Hero {
    frase
    fecha
    parrafo
    recapButton {
      text
      Link
      position
    }
    sectionButton {
      text
      Link
      position
    }
  }
  Secondary {
    image {
      url
      name
      ext
    }
    imageResponsive {
      url
      name
      ext
    }
    position
    fullWidth
    button
    textButton
  }
  SecondBanner {
    sectionButton {
      text
      Link
      position
    }
    phrase
    branchs {
      text
    }
  }
  serviceBanner {
    title
    subtitle
    dark
    services {
      services {
        text
      }
      serviceTitle
    }
  }
  SecondServiceBanner {
    title
    subtitle
    dark
    services {
      services {
        text
      }
      serviceTitle
    }
  }
  ThirdBanner {
    phrase
    ThirdBannerWords {
      word
    }
  }
  ContactBanner {
    title
    firstSubtitle
    secondSubtitle
    button {
      text
      Link
      position
    }
    contactForm {
      Question
    }
  }
  VideoBanner {
    title
    Videos {
      url
    }
  }
  LastBanner {
    image {
      url
      name
      ext
    }
    imageResponsive {
      url
      name
      ext
    }
    position
    fullWidth
    button
    textButton
  }
  Testimonials {
    button {
      text
      Link
      position
    }
    TesmimonialData {
      image {
        url
        name
        ext
      }
      responsiveImage {
        url
        name
        ext
      }
      date
      title
      testimony
    }
  }
  Clients {
    Clients {
      name
      logo {
        url
        ext
        name
      }
    }
  }
}
`

export default homePage
