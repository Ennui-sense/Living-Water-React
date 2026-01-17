import firstNewsImageSrc from "~/assets/images/news/1.jpg"
import secondNewsImageSrc from "~/assets/images/news/2.jpg"
import thirdNewsImageSrc from "~/assets/images/news/3.jpg"

interface INewsCard {
  imageSrc: string;
  date: string;
  title: string;
  id: number;
}

export const NewsCardsData: INewsCard[] = [
	{
		imageSrc: firstNewsImageSrc,
		date: "27–06–2022",
		title: "Министр оценил «Живую воду»",
		id: 1
	},
	{
		imageSrc: secondNewsImageSrc,
		date: "04–05–2022",
		title: "Завершили совместную акцию «Живая Вода каждой грядке»",
		id: 2
	},
	{
		imageSrc: thirdNewsImageSrc,
		date: "22–04–2022",
		title: "3 важные новости про онлайн-магазин",
		id: 3
	}
]