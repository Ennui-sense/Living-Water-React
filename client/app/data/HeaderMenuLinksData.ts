interface IHeaderMenuLink {
  text: string;
  href?: string;
  value?: string;
  id: number;
}

export const HeaderMenuLinksData: IHeaderMenuLink[] = [
  { text: "О нас", href: "/about", id: 1 },
  { text: "Каталог", value: "catalog", id: 2 },
  { text: "Отзывы", href: "/reviews", id: 3 },
  { text: "Блог", href: "/blog", id: 4 },
  { text: "Контакты", href: "/contacts", id: 5 },
];
