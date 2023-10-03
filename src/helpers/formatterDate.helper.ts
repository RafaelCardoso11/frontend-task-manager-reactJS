export const formatterDate = (date: string | Date) =>
  new Date(date).toLocaleDateString("pt-BR",  { timeZone: 'UTC' });
