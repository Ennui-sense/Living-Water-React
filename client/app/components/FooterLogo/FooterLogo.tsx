import "./FooterLogo.scss";

import FooterLogoSrc from "~/assets/images/logo-footer.svg"

const FooterLogo = () => {
  return (
    <a href="/" className="footer-logo">
      <img
        src={FooterLogoSrc}
        alt="Наше логотип"
        width={120}
        height={120}
        loading="lazy"
        className="footer-logo__image"
      />
    </a>
  );
};

export default FooterLogo;
