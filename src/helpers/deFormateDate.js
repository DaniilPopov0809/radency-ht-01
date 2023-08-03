export const deFormateDate = (dateStr) => {
    if (dateStr.length !== 0){
    const [day, month, year] = dateStr.split('/');
    const formattedDay = day.padStart(2, '0');
    const formattedMonth = month.padStart(2, '0');
    return`${year}-${formattedMonth}-${formattedDay}`;
  }
  return "";
  }