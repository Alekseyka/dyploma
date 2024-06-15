// src/data/productionPlan.ts

type ProductionPlan = {
  week: string;
  productionLine: string;
  roofingFeltType: string;
  quantity: number;
};

export const productionPlanData: ProductionPlan[] = [
  {
    week: "2024-07-01",
    productionLine: "Лінія 1",
    roofingFeltType: "Єврорубероїд ПромІзол",
    quantity: 500,
  },
  {
    week: "2024-07-01",
    productionLine: "Лінія 2",
    roofingFeltType: "Рубероїд Стандарт",
    quantity: 700,
  },
  {
    week: "2024-07-08",
    productionLine: "Лінія 1",
    roofingFeltType: "Рубероїд Економ",
    quantity: 60,
  },
  {
    week: "2024-07-08",
    productionLine: "Лінія 2",
    roofingFeltType: "Єврорубероїд ПромІзол",
    quantity: 80,
  },
];
