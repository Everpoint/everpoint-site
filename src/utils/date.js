export const format = date => {
  const d = new Date(date);
  if (d instanceof Date) {
    const day = d.getDate();
    const monthIndex = d.getMonth();
    const year = d.getFullYear();
    const zeroToMonth = monthIndex + 1 < 10 ? "0" : "";
    const zeroToDay = day < 10 ? `0${day}` : day;

    return `${zeroToDay}.${zeroToMonth}${monthIndex + 1}.${year}`;
  } else {
    return "Invalid date";
  }
};
