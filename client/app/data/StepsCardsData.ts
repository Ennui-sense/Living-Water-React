interface IStepCard {
  title: string;
  description: string;
  imageSrc: string;
  id: number;
}
export const StepsCardsData: IStepCard[] = [
  {
    title: "Обучение",
    description:
      "Получите от нас бесплатный обучающий пакет материалов по открытию бизнеса",
    imageSrc: "app/assets/images/steps/1.jpg",
    id: 1,
  },
  {
    title: "Договор",
    description:
      "Заключите договор на установку с ТСЖ / УК / магазином, офисным центром",
    imageSrc: "app/assets/images/steps/2.jpg",
    id: 2,
  },
  {
    title: "Покупка аппарата",
    description:
      "Купите аппарат «Живая Вода» с гарантией, технической и консультационной поддержкой",
    imageSrc: "app/assets/images/steps/3.jpg",
    id: 3,
  },
  {
    title: "Установка аппарата",
    description: "Установите аппарат на точке продаж мы расскажем как",
    imageSrc: "app/assets/images/steps/4.jpg",
    id: 4,
  },
  {
    title: "Инкассация",
    description:
      "Инкассируйте прибыль с 1-го месяца и легко масштабируйте свою сеть",
    imageSrc: "app/assets/images/steps/5.jpg",
    id: 5,
  },
];
