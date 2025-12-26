export interface IInputModalFeedback {
  type: string;
  id: string;
  placeholder: string;
}

export interface IModalFeedback {
  modalType: string;
  title: string;
  description: string;
  buttonText: string;
  inputs: IInputModalFeedback[];
  succesTitle: string;
  succesDescription: string;
}

export const ModalsFeedbackData: IModalFeedback[] = [
  {
    modalType: "plan",
    title: "Получите наш бизнес-план",
    description: "Заполните форму, чтобы скачать бизнес-план",
    buttonText: "Скачать",
    inputs: [
      {
        type: "text",
        id: "name-plan",
        placeholder: "Имя",
      },
      {
        type: "email",
        id: "email-plan",
        placeholder: "Электронная почта",
      },
      {
        type: "tel",
        id: "tel-plan",
        placeholder: "+7 932 999-99-99",
      },
    ],
    succesTitle: "Загрузка началась!",
    succesDescription:
      "Если в течение нескольких минут загрузка не началась, нажмите по этой ссылке",
  },
  {
    modalType: "mailing",
    title: "Подпишитесь на рассылку",
    description:
      "Заполните форму, чтобы подписаться на рассылку самых свежих новостей",
    buttonText: "Подписаться",
    inputs: [
      {
        type: "email",
        id: "email-malling",
        placeholder: "Электронная почта",
      },
    ],
    succesTitle: "Подписка оформлена!",
    succesDescription: "На почте вас ждёт уже первое сообщение от нас :)",
  },
  {
    modalType: "consultation",
    title: "Закажите консультацию",
    description: "Заполните форму, чтобы с вами мог связаться консультант",
    buttonText: "Заказать",
    inputs: [
      {
        type: "text",
        id: "name-consultation",
        placeholder: "Имя",
      },
      {
        type: "email",
        id: "email-consultation",
        placeholder: "Электронная почта",
      },
      {
        type: "tel",
        id: "tel-consultation",
        placeholder: "+7 932 999-99-99",
      },
    ],
    succesTitle: "Успешно отправлено!",
    succesDescription: "В течение пары минут с вами свяжется наш специалист",
  },
];
