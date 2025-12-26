import "./FooterMenu.scss";

import { FooterMenuLinksData } from "~/data/FooterMenuLinksData";

const FooterMenu = () => {
	return (
		<nav className="footer-menu">
			<h2 className="footer-menu__title h4">Меню</h2>
			<ul className="footer-menu__list">
				{FooterMenuLinksData.map(({id, text, href}) => (
					<li className="footer-menu__item" key={id}>
						<a href={href} className="footer-menu__link">
							{text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default FooterMenu