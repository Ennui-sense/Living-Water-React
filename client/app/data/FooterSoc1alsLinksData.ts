import YouTubeIcon from "~/assets/icons/youtube.svg?react";
import VkIcon from "~/assets/icons/vk.svg?react";
import ClassmatesIcon from "~/assets/icons/classmates.svg?react";
import TelegramIcon from "~/assets/icons/telegram.svg?react";

interface FooterSoc1alsLink {
	id: number
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
	href: string
}

export const FooterSoc1alsLinksData: FooterSoc1alsLink[] = [
  {
		id: 1,
		Icon: YouTubeIcon,
		href: "/"
	},
  {
		id: 2,
		Icon: VkIcon,
		href: "/"
	},
  {
		id: 3,
		Icon: ClassmatesIcon,
		href: "/"
	},
  {
		id: 4,
		Icon: TelegramIcon,
		href: "/"
	},
];
