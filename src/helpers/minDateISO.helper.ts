export const minDateISO = (minDate: Date, dateInISOString: string) => {
  const min = new Date(
    minDate.getFullYear(),
    minDate.getMonth(),
    minDate.getDate()
  );
  const inputDate = new Date(dateInISOString);

   // Ajusta o fuso horário para UTC
   inputDate.setUTCMinutes(inputDate.getUTCMinutes() + inputDate.getTimezoneOffset());

  return inputDate.getTime() >= min.getTime() ? true : false;
};
