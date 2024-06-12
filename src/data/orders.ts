type Order = {
  customerName: string;
  roofingFeltType: string;
  amount: number;
  deadlineDate: string;
};

export const ordersData: Order[] = [
  {
    customerName: "ТОВ Рубероїд Пром",
    roofingFeltType: "Єврорубероїд ПромІзол",
    amount: 100,
    deadlineDate: "2024-07-01",
  },
  {
    customerName: "ТОВ Будівельник",
    roofingFeltType: "Рубероїд Стандарт",
    amount: 200,
    deadlineDate: "2024-07-15",
  },
  {
    customerName: "ПП ЕкономБуд",
    roofingFeltType: "Рубероїд Економ",
    amount: 150,
    deadlineDate: "2024-07-20",
  },
];
