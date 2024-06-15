// src/data/materials.ts

type Material = {
  type: string;
  name: string;
  amount: number;
  unit: string;
};

export const materialsData: Material[] = [
  { type: "Материал", name: "Бітум", amount: 8.57, unit: "кг" },
  { type: "Материал", name: "Вторичний поліетилен", amount: 0.46, unit: "кг" },
  { type: "Материал", name: "Пісок з відсівів дроблення", amount: 11, unit: "кг" },
  { type: "Материал", name: "Мінеральний порошок", amount: 14.33, unit: "кг" },
  { type: "Материал", name: "Пленка ПЭТ-О 'П' 3х100", amount: 1, unit: "m2" },
  { type: "Материал", name: "Плівка з перфорацією", amount: 10, unit: "пог.м" },
  { type: "Материал", name: "Стеклохолст ХСН-40а-100", amount: 10, unit: "m2" },
  { type: "Материал", name: "Піддон 1м*1,2м", amount: 0.033, unit: "шт" },
  { type: "Материал", name: "Лента п/п", amount: 0.62, unit: "Метр" },
  { type: "Материал", name: "Стрічка липка пакув 48мм*150м", amount: 1.98, unit: "Метр" },
  { type: "Материал", name: "Плівка термоусадочна", amount: 0.06, unit: "кг" },
  { type: "Материал", name: "Пряжа проволочная 16 мм", amount: 0.203, unit: "шт" },
  { type: "Материал", name: "Уголок", amount: 0.07, unit: "Метр" },
  { type: "Материал", name: "Термоэтикетка 101*101,5", amount: 1, unit: "шт" },
];
