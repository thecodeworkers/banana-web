import React, { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const ServiceBanner = ({ content }) => {

  gsap.registerPlugin(ScrollTrigger)
  const main = useRef(null)

  const animation = (classParent: string, classChild: string, width: number, height: number) => {
    gsap.to(`.${classParent}`, {
      x: width,
      scrollTrigger: {
        trigger: `.${classChild}`,
        scrub: true,
        scrollHeight: height
      }
    })
  }

  useEffect(() => {
    const height = main?.current?.clientHeight || 0
    animation('_scrollContainer', '_scrollTitle', 400, height)
    animation('_scrollContainerTwo', '_scrollTitleTwo', -400, height)
  }, [])

  return (
    <>
      <div className={'_serviceBannerContainer'} ref={main}>
        <div className={'_serviceBannerContent'}>
          <div className={styles._serviceBanner}>
            <div className={styles._titleContainer}>
              <p className={'_title'}>{content?.title}</p>
            </div>
            <div className={styles._subtitleContainer}>
              <p className={'_subtitle'}>{content?.subtitle}</p>
            </div>
            {content?.dark == true ?
              <div className={'_scrollContainer'} >
                <div className={styles._scrollContain} ><p className={'_scrollTitle'}>we think</p></div>
              </div>
              :
              <div className={'_scrollContainerTwo'} >
                <div className={styles._scrollContain} ><p className={'_scrollTitleTwo'}>we create</p></div>
              </div>
            }

            <div className={'_content'}>

              {content?.services?.map((item, index) => {
                return (
                  <div className={styles._servicesContainer} key={index}>
                    <div className={'_contentTitleContainer'}>
                      <p className={'_contentTitle'}>{item.serviceTitle}</p>
                    </div>
                    {item?.services?.map((el, index) => {
                      return (
                        <div key={index}>
                          <p className={'_contentSubtitle'}>{el.text}</p>
                        </div>
                      )
                    })}
                  </div>
                )
              }
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
	._serviceBannerContainer{
		width: 100%;
		background: ${content?.dark == true ? 'white' : 'black'};
    overflow: hidden;
	}
	._serviceBannerContent{
		margin-left: 0.5%;
		width: 99.5%;
		background: ${content?.dark == true ? 'black' : 'white'};
		height: 100%;
		padding: 3rem 0
	}
	._content{
		display: grid;
		grid-template-columns: repeat(${content?.services.length}, 1fr);
		width: 100%;
	}
	._title{
		font-size: 4.5rem;
		font-weight: 700;
    font-family: 'BoldFont', sans-serif;
		color: ${content?.dark == true ? 'white' : 'black'};
	}
	._subtitle{
		font-size: 1rem;
    font-family: 'NormalFont', sans-serif;
    font-weight: 400;
		color: ${content?.dark == true ? 'white' : 'black'};
 	}
	._contentTitle{
		font-size: 1.5rem;
    font-family: 'MediumFont', sans-serif;
    font-weight: 400;
		color: ${content?.dark == true ? 'white' : 'black'};
	}
	._contentSubtitle{
		font-size: 1rem;
    font-family: 'NormalFont', sans-serif;
    font-weight: 400;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		color: ${content?.dark == true ? 'white' : 'black'};
    width:70%
	}
	._scrollTitle{
		font-size: 18rem;
    font-family: 'NormalFont', sans-serif;
		font-weight: 700;
		position: absolute;
		opacity: 0.2;
		color: gray;
    left: -18.75rem;
    top:-4.6875rem
	}
	._scrollContainer {
		width: 100%;
		position: relative;
	}

  ._scrollTitleTwo {
		font-size: 18rem;
    font-family: 'NormalFont', sans-serif;
		font-weight: 700;
		position: absolute;
		opacity: 0.2;
		color: black;
    right: -18.75rem;
    top:-4.6875rem
	}
	._scrollContainerTwo {
		width: 100%;
		position: relative;
	}

._contentTitleContainer{
	margin-bottom: 0.5rem;
}
	@media(max-width: 992px) {
		._content {
			grid-template-columns: repeat(2, 1fr);
		}
		._scrollTitle{
			text-align:center
		}
	}
	@media(max-width: 576px) {
		._content {
			grid-template-columns: repeat(1, 1fr);
		}
		._scrollContainer {
		display:none
		}
		._contentTitleContainer{
			margin-top: 0.5rem
		}
		._contentTitle{
			font-size: 1.6rem;
		}
    ._serviceBannerContent{
      padding: 1rem 0
    }
    ._scrollTitle{
      display:none
    }
    ._scrollTitleTwo{
      display:none
    }
    ._title{
      font-size: 2.1875rem;
    }
    ._subtitle{
      font-size: 0.8125rem;
    }
    ._contentTitle{
			font-size: 1.5rem
		}
    ._contentSubtitle{
      font-size: 0.8125rem;
    }
	}
`}</style>
    </>
  )
}

export default ServiceBanner
