export interface IFilterVariant {
  label: string;
  value: string;
}

interface IFilter {
  label: string;
  value: string;
  type: "checkbox" | "input";
  id: number;
  variants: IFilterVariant[];
  unit?: string;
}

export const FiltersData: IFilter[] = [
  {
    label: "Категория",
    value: "category",
    type: "checkbox",
    id: 1,
    variants: [
      { value: "device", label: "Аппарат" },
      { value: "kiosk", label: "Киоск" },
      { value: "module", label: "Модуль" },
    ],
  },
  {
    label: "Цена",
    value: "price",
    type: "input",
    id: 2,
    unit: "₽",
    variants: [
      { value: "minPrice", label: "от" },
      { value: "maxPrice", label: "до" },
    ],
  },
  {
    label: "Объем бака",
    value: "tankVolume",
    type: "input",
    id: 3,
    unit: "л",
    variants: [
      {
        value: "minTankVolume",
        label: "от",
      },
      {
        value: "maxTankVolume",
        label: "до",
      },
    ],
  },
  {
    label: "Источник воды",
    value: "source",
    type: "checkbox",
    id: 4,
    variants: [
      { value: "water", label: "Артезианская вода" },
      { value: "connection", label: "Подключение к водопроводу" },
    ],
  },
  {
    label: "Размещение",
    value: "placement",
    type: "checkbox",
    id: 5,
    variants: [
      { value: "inside", label: "Внутри помещения" },
      { value: "outdoor", label: "Уличное" },
    ],
  },
  {
    label: "Тип аппарата",
    value: "type",
    type: "checkbox",
    id: 6,
    variants: [
      { value: "monoblock", label: "Моноблок" },
      { value: "parts", label: "Раздельные блоки (розлив + очистка)" },
    ],
  },
];
