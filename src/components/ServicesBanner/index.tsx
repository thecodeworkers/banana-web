import React, { FC, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { serviceData } from './data'

const ServiceBanner = ({ background }) => {
	//   const image = data?.Imagen
	const services: any = serviceData
	const [pos, setPos] = useState(0)

	useEffect(() => {
		const handleUserScroll = (event) => {
			let scroll = window.scrollY
			if (scroll > 200) setPos(scroll)
		};

		window.addEventListener('scroll', handleUserScroll);
		return () => window.removeEventListener('scroll', handleUserScroll);
	})

	return (
		<>
			<div className={'_serviceBannerContainer'}>
				<div className={'_serviceBannerContent'}>
					<div className={styles._serviceBanner}>
						<div className={styles._titleContainer}>
							<p className={'_title'}>Servicios Roots  _</p>
						</div>
						<div className={styles._subtitleContainer}>
							<p className={'_subtitle'}>La raíz de la que todo parte. Pensamos, planificamos y producimos.</p>
						</div>
						{ background == 'black' ?
							<div className={'_scrollContainer'} style={{ transform: `translate(calc(-${pos}px + 200px))` }}>
								<div className={styles._scrollContain} ><p className={'_scrollTitle'}>We Think</p></div>
							</div> 
							:
							<div className={'_scrollContainer'} style={{ transform: `translate(calc(+${pos}px + 200px))` }}>
							<div className={styles._scrollContain} ><p className={'_scrollTitle'}>We Create</p></div>
						</div> 
						}

						<div className={'_content'}>

							{services.map((item, index) => {
								return (
									<div className={styles._servicesContainer} key={index}>
										<div className={'_contentTitleContainer'}>
											<p className={'_contentTitle'}>{item.title}</p>
										</div>
										{item?.descriptions.map((el, index) => {
											return (
												<div key={index}>
													<p className={'_contentSubtitle'}>{el.text}</p>
												</div>
											);
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
		background: ${background == 'black' ? 'black' : 'white'};
	}
	._serviceBannerContent{
		margin-left: 0.5%;
		width: 99.5%;
		background: ${background == 'black' ? 'black' : 'white'};
		height: 100%;
		padding: 3rem 0
	}
	._content{
		display: grid;
		grid-template-columns: repeat(${services.length}, 1fr);
		width: 100%;
	} 
	._title{
		font-size: 3.5rem;
		font-weight: 700;
		color: ${background == 'black' ? 'white' : 'black'};
	}
	._subtitle{
		font-size: 1rem;
		color: ${background == 'black' ? 'white' : 'black'};
 	}
	._contentTitle{
		font-size: 1.3rem;
		color: ${background == 'black' ? 'white' : 'black'};
	}
	._contentSubtitle{
		font-size: 1rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		color: ${background == 'black' ? 'white' : 'black'};
	}
	._scrollTitle{
		font-size: 12rem;
		font-weight: 700;
		position: absolute;
		opacity: 0.2;
		color: gray;
	}
	._scrollContainer {
		width: 100%;
		position: relative
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
	}
`}</style>
		</>
	)
}

export default ServiceBanner