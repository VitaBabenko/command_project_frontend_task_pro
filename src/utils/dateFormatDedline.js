export const dateFormatDedline = deadline => {
  const seconds = new Date(deadline);
  const day = seconds.getDate();
  const month = seconds.getMonth() + 1;
  const monthFormat = month < 10 ? `0${month}` : `${month}`;

  const year = seconds.getFullYear();
  return `${day}/${monthFormat}/${year}`;
};
