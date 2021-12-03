const homePage = (locale) => `
  homePage(locale: "${locale}") {
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
      phrase
      date
      paragraph
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
    GifBanner{
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
    ThirdBanner {
      phrase
      phraseTwo
      blueText
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
        input{
          position
          name
          regex
          Type
          placeholder
        }
      }
    }
    VideoBanner {
      title
      Videos{
        videoImage{
          url
          name
        }
        videoAction
        videoDescription
        url
      }
    }
    ClasroomBanner{
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
