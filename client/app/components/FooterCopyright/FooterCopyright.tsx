import "./FooterCopyright.scss";

const FooterCopyright = () => {
  return (
    <div className="footer-copyright">
      <div className="footer-copyright__block">
        <p className="footer-copyright__text">
          © Живая Вода, <time dateTime="2022">2022</time>
        </p>
        <span className="footer-copyright__countries">
          <a href="/" className="footer-copyright__link">
            Казахстан
          </a>
          <a href="/" className="footer-copyright__link">
            Беларусь
          </a>
        </span>
      </div>

      <div className="footer-copyright__links">
        <a href="/" className="footer-copyright__link">
          Политика конфеденциальности
        </a>
        <a href="/" className="footer-copyright__link">
          Пользовательское соглашение
        </a>
      </div>
    </div>
  );
};

export default FooterCopyright;
