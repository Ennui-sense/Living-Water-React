import firstStep from "~/assets/images/steps/1.jpg"
import secondStep from "~/assets/images/steps/2.jpg"
import thirdStep from "~/assets/images/steps/3.jpg"
import fourthStep from "~/assets/images/steps/4.jpg"
import fifthStep from "~/assets/images/steps/5.jpg"



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
    imageSrc: firstStep,
    id: 1,
  },
  {
    title: "Договор",
    description:
      "Заключите договор на установку с ТСЖ / УК / магазином, офисным центром",
    imageSrc: secondStep,
    id: 2,
  },
  {
    title: "Покупка аппарата",
    description:
      "Купите аппарат «Живая Вода» с гарантией, технической и консультационной поддержкой",
    imageSrc: thirdStep,
    id: 3,
  },
  {
    title: "Установка аппарата",
    description: "Установите аппарат на точке продаж мы расскажем как",
    imageSrc: fourthStep,
    id: 4,
  },
  {
    title: "Инкассация",
    description:
      "Инкассируйте прибыль с 1-го месяца и легко масштабируйте свою сеть",
    imageSrc: fifthStep,
    id: 5,
  },
];
