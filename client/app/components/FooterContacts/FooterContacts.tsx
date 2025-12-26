import "./FooterContacts.scss";

import { FooterSoc1alsLinksData } from "~/data/FooterSoc1alsLinksData";

const FooterContacts = () => {
  return (
    <div className="footer-contacts">
      <div className="footer-contacts__body">
        <h2 className="footer-contacts__title h4">Контакты</h2>
        <address className="footer-contacts__info">
          <a href="/" className="footer-contacts__link">
            614002, Россия, Пермь,
            <br /> Чернышевского, 15а, оф. 7
          </a>

          <div className="footer-contacts__block">
            <a href="tel:88005519071" className="footer-contacts__link">
              8 800 551-90-71
            </a>
            <a
              href="mailto:alivewater@mail.ru"
              className="footer-contacts__link"
            >
              alivewater@mail.ru
            </a>
          </div>
        </address>
      </div>

      <div className="footer-contacts__soc1als">
        <ul className="footer-contacts__soc1als-list">
          {FooterSoc1alsLinksData.map(({ id, Icon, href }) => (
            <li className="footer-contacts__soc1als-item" key={id}>
              <a href={href} className="footer-contacts__soc1als-link">
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterContacts;
