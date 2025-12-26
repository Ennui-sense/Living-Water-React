interface IFooterMenuLink {
  text: string;
  href: string;
  id: number;
}

export const FooterMenuLinksData: IFooterMenuLink[] = [
  { text: "О нас", href: "/about", id: 1 },
  { text: "Доставка и оплата", href: "/", id: 2 },
  { text: "Отзывы", href: "/reviews", id: 3 },
  { text: "Блог", href: "/blog", id: 4 },
  { text: "Контакты", href: "/contacts", id: 5 },
];
