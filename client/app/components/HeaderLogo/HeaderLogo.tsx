import "./HeaderLogo.scss";

import HeaderLogoImageSrc from "~/assets/images/logo.svg";

const HeaderLogo = () => {
  return (
    <figure className="logo">
      <a href="#" className="logo__link">
        <img
          src={HeaderLogoImageSrc}
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

export default HeaderLogo;
