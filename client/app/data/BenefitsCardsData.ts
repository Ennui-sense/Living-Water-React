import CertificateIcon from "~/assets/icons/certificate.svg?react";
import PeopleIcon from "~/assets/icons/people.svg?react";
import CaseIcon from "~/assets/icons/case.svg?react";

export interface IBenefitsCard {
  title: string;
  description: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  id: number;
}

export const BenefitsCardsData: IBenefitsCard[] = [
  {
    title: "Качество и надёжность",
    description:
      "ЕАС и СЕ сертификаты подтверждают надёжность и качество нашего оборудувания",
    Icon: CertificateIcon,
		id: 1
  },
  {
    title: "Представители",
    description:
      "Широкая сеть представителей в городах России в СНГ и в частности Республике Казахстан",
    Icon: PeopleIcon,
		id: 2
  },
  {
    title: "Опыт",
    description:
      "У нас есть своя сеть из 300 аппаратов и мы всё знаем про этот бизнес",
    Icon: CaseIcon,
		id: 3
  },
];
