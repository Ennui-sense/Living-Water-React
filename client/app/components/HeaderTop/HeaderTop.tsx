import "./HeaderTop.scss";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="header-top__inner container">
        <a href="#" className="header-top__link">
          Доставка и оплата
        </a>
        <div className="header-top__contacts">
          <a href="#" className="header-top__link">
            Система мониторинга
          </a>
          <a href="tel:88005519071" className="header-top__link">
            8&nbsp;800&nbsp;551-90-71
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
