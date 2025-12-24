interface ISection {
  name: string;
  title: string;
  description?: string;
  button?: {
    buttonText: string;
    href?: string;
    isDisabled?: boolean;
  };
  buttonSquareInner?: boolean;
}

export const SectionsData: ISection[] = [
  {
    name: "about",
    title: "Береги планету вместе с нами!",
    description:
      "У нас своя большая сеть аппаратов из более 300 точек. Используя наш многолетний опыт установки и эксплуатации водоматов, мы поможем вам легко и быстро организовать ваш бизнес",
    button: {
      buttonText: "Узнать больше",
      isDisabled: true,
    },
  },
  {
    name: "facts",
    title: "Что мы предлагаем",
    description:
      "Поможем вам открыть бизнес по продаже питьевой воды в вашем городе: оборудование, бесплатное обучение, консультации по продвижению, бизнес-сообщество",
  },
  {
    name: "steps",
    title: "Как это работает",
  },
  {
    name: "benefits",
    title: "Почему выбирают нас",
  },
  {
    name: "products",
    title: "Каталог аппаратов",
    button: {
      buttonText: "Смотреть все",
      href: "/products",
    },
  },
  {
    name: "machine",
    title: "Об аппаратах",
    description:
      "Водомат эффективно готовит чистую полезную питьевую воду — очищает (10 ступеней очистки), минерализует полезными для вашего здоровья солями и минералами до нужного уровня, озонирует",
  },
  {
    name: "reviews",
    title: "Что говорят о нас",
    button: {
      buttonText: "Смотреть все",
      isDisabled: true,
      href: "/reviews",
    },
  },
  {
    name: "news",
    title: "Последние новости",
    button: {
      buttonText: "Смотреть все",
      isDisabled: true,
      href: "/blog",
    },
    buttonSquareInner: true,
  },
];
