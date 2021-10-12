import styles from './styles.module.scss'
import logo from '../../../../public/icons/logo.png'
import toggle from '../../../../public/icons/toggle.png'
import Image from 'next/image'

const Navbar = () => {
	return (
		<div className={styles._parent}>
			<div className={styles._childOne}>
				<Image
					src={logo}
					alt="logo-icon"
					width={22}
					height={20}
					placeholder="blur"
					quality={100}
				/>
			</div>
			<div className={styles._childTwo}>
				<p> CARACAS 3:00 PM </p>
			</div>
			<div className={styles._childThree}>
				<div className={styles._toggleParent}>
					<Image
						src={toggle}
						alt="toggle-icon"
						width={20}
						height={18}
						placeholder="blur"
						quality={100}
					/>
				</div>
			</div>
		</div>
	)
}

export default Navbar