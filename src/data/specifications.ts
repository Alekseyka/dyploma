type RawMaterial = {
  name: string;
  amount: number;
  unit: string;
};

type Specification = {
  roofingFelt: string;
  materials: RawMaterial[];
};

export const specificationData: Specification[] = [
  {
    roofingFelt: "Єврорубероїд ПромІзол",
    materials: [
      { name: "Скловолокно", amount: 5, unit: "кг" },
      { name: "Бітум", amount: 10, unit: "кг" },
      { name: "Мінеральна крихта", amount: 15, unit: "кг" },
      { name: "Вторичний поліетилен", amount: 0.46, unit: "кг" },
      { name: "Пісок з відсівів дроблення", amount: 11, unit: "кг" },
      { name: "Пленка ПЭТ-О 'П' 3х100", amount: 1, unit: "m2" },
      { name: "Плівка з перфорацією", amount: 10, unit: "пог.м" },
      { name: "Стеклохолст ХСН-40а-100", amount: 10, unit: "m2" },
      { name: "Піддон 1м*1,2м", amount: 0.033, unit: "шт" },
      { name: "Лента п/п", amount: 0.62, unit: "Метр" },
      { name: "Стрічка липка пакув 48мм*150м", amount: 1.98, unit: "Метр" },
      { name: "Плівка термоусадочна", amount: 0.06, unit: "кг" },
      { name: "Пряжа проволочная 16 мм", amount: 0.203, unit: "шт" },
      { name: "Уголок", amount: 0.07, unit: "Метр" },
      { name: "Термоэтикетка 101*101,5", amount: 1, unit: "шт" },
    ],
  },
  {
    roofingFelt: "Рубероїд Стандарт",
    materials: [
      { name: "Картон", amount: 7, unit: "кг" },
      { name: "Бітум", amount: 12, unit: "кг" },
      { name: "Мінеральна крихта", amount: 18, unit: "кг" },
      { name: "Вторичний поліетилен", amount: 0.46, unit: "кг" },
      { name: "Пісок з відсівів дроблення", amount: 11, unit: "кг" },
      { name: "Пленка ПЭТ-О 'П' 3х100", amount: 1, unit: "m2" },
      { name: "Плівка з перфорацією", amount: 10, unit: "пог.м" },
      { name: "Стеклохолст ХСН-40а-100", amount: 10, unit: "m2" },
      { name: "Піддон 1м*1,2м", amount: 0.033, unit: "шт" },
      { name: "Лента п/п", amount: 0.62, unit: "Метр" },
      { name: "Стрічка липка пакув 48мм*150м", amount: 1.98, unit: "Метр" },
      { name: "Плівка термоусадочна", amount: 0.06, unit: "кг" },
      { name: "Пряжа проволочная 16 мм", amount: 0.203, unit: "шт" },
      { name: "Уголок", amount: 0.07, unit: "Метр" },
      { name: "Термоэтикетка 101*101,5", amount: 1, unit: "шт" },
    ],
  },
  {
    roofingFelt: "Рубероїд Економ",
    materials: [
      { name: "Картон", amount: 6, unit: "кг" },
      { name: "Бітум", amount: 9, unit: "кг" },
      { name: "Мінеральна крихта", amount: 12, unit: "кг" },
      { name: "Вторичний поліетилен", amount: 0.46, unit: "кг" },
      { name: "Пісок з відсівів дроблення", amount: 11, unit: "кг" },
      { name: "Пленка ПЭТ-О 'П' 3х100", amount: 1, unit: "m2" },
      { name: "Плівка з перфорацією", amount: 10, unit: "пог.м" },
      { name: "Стеклохолст ХСН-40а-100", amount: 10, unit: "m2" },
      { name: "Піддон 1м*1,2м", amount: 0.033, unit: "шт" },
      { name: "Лента п/п", amount: 0.62, unit: "Метр" },
      { name: "Стрічка липка пакув 48мм*150м", amount: 1.98, unit: "Метр" },
      { name: "Плівка термоусадочна", amount: 0.06, unit: "кг" },
      { name: "Пряжа проволочная 16 мм", amount: 0.203, unit: "шт" },
      { name: "Уголок", amount: 0.07, unit: "Метр" },
      { name: "Термоэтикетка 101*101,5", amount: 1, unit: "шт" },
    ],
  },
];
