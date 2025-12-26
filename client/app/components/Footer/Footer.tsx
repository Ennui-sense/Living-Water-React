import "./Footer.scss";

import FooterLogo from "~/components/FooterLogo/FooterLogo";
import FooterMenu from "~/components/FooterMenu/FooterMenu";
import FooterContacts from "~/components/FooterContacts/FooterContacts";
import FooterCopyright from "~/components/FooterCopyright/FooterCopyright";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__inner">
        <div className="footer__content">
          <FooterLogo />
          <div className="footer__info">
            <FooterMenu />
            <FooterContacts />
          </div>
        </div>

        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
