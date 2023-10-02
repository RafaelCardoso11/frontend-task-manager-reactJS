export const minDateISO = (minDate: Date, dateInISOString: string) => {
  const min = new Date(
    minDate.getFullYear(),
    minDate.getMonth(),
    minDate.getDate()
  );
  const inputDate = new Date(dateInISOString);

  return inputDate.getTime() >= min.getTime() ? true : false;
};
