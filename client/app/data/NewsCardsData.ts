interface INewsCard {
  imageSrc: string;
  date: string;
  title: string;
  id: number;
}

export const NewsCardsData: INewsCard[] = [
	{
		imageSrc: "app/assets/images/news/1.jpg",
		date: "27–06–2022",
		title: "Министр оценил «Живую воду»",
		id: 1
	},
	{
		imageSrc: "app/assets/images/news/2.jpg",
		date: "04–05–2022",
		title: "Завершили совместную акцию «Живая Вода каждой грядке»",
		id: 2
	},
	{
		imageSrc: "app/assets/images/news/3.jpg",
		date: "22–04–2022",
		title: "3 важные новости про онлайн-магазин",
		id: 3
	}
]