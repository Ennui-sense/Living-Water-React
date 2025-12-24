import "./Logo.scss";

import LogoImageSrc from "~/assets/images/logo.svg";

const Logo = () => {
  return (
    <figure className="logo">
      <a href="#" className="logo__link">
        <img
          src={LogoImageSrc}
          alt="Логотип нашей компании"
          className="logo__image"
        />
      </a>

      <figcaption className="logo__text">
        Автоматы по продаже питьевой воды
      </figcaption>
    </figure>
  );
};

export default Logo;
