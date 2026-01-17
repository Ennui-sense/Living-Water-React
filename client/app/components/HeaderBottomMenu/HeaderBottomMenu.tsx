import { HeaderMenuLinksData } from "~/data/HeaderMenuLinksData";

import Submenu from "../Submenu/Submenu";

import { useState } from "react";

const HeaderBottomMenu = () => {
  const [activeSubmenuValue, setActiveSubmenuValue] = useState<string | null>(
    null,
  );



  return (
    <nav className="header-bottom__menu">
      <ul className="header-bottom__menu-list">
        {HeaderMenuLinksData.map(({ text, href, id, value }) => (
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
