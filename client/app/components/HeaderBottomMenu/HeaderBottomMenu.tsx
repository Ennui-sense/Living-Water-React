import { headerMenuLinks } from "~/data/HeaderMenuLinks";

const HeaderBottomMenu = () => {
  return (
    <nav className="header-bottom__menu">
      <ul className="header-bottom__menu-list">
        {headerMenuLinks.map(({ text, href, id }) => (
          <li className="header-bottom__menu-item" key={id}>
            <a href={href} className="header-bottom__menu-link">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderBottomMenu;
