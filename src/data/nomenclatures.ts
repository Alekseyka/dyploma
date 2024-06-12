type RoofingFelt = {
  name: string;
  price: number;
  weight: number;
  length: number;
  thickness: number;
  base: string;
};

export const roofingFeltData: RoofingFelt[] = [
  {
    name: "Єврорубероїд ПромІзол",
    price: 1200,
    weight: 35,
    length: 10,
    thickness: 3.5,
    base: "Скловолокно",
  },
  {
    name: "Рубероїд Стандарт",
    price: 900,
    weight: 30,
    length: 10,
    thickness: 3.0,
    base: "Картон",
  },
  {
    name: "Рубероїд Економ",
    price: 700,
    weight: 25,
    length: 10,
    thickness: 2.5,
    base: "Картон",
  },
];