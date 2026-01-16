export interface ISortField {
  value: string;
  label: string;
  id: number;
}

export const SortData: ISortField[] = [
  {
    value: "rec",
    label: "Рекомендуем",
    id: 1,
  },
  {
    value: "new",
    label: "Новинки",
    id: 2,
  },
  {
    value: "pop",
    label: "Популярность",
    id: 3,
  },
  {
    value: "low",
    label: "Недорогие",
    id: 4,
  },
  {
    value: "high",
    label: "Дорогие",
    id: 5,
  },
];
