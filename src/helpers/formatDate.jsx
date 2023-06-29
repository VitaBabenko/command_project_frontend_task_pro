function isSameDay(date1, date2) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

export const formatDate = date => {
  const today = new Date();
  const tomorrow = new Date(today);
  const optionsAllDays = date.toLocaleDateString('en-US', {
    weekday: 'long',
  });
  const optionsNearestDays = date.toLocaleDateString('en-US', {
    month: 'long',
  });

  tomorrow.setDate(tomorrow.getDate() + 1);

  if (isSameDay(date, today)) {
    return `Today, ${optionsNearestDays} ${date.getDate()}`;
  } else if (isSameDay(date, tomorrow)) {
    return `Tomorrow, ${optionsNearestDays} ${date.getDate()}`;
  } else {
    const formattedDate = `${optionsAllDays} ${date.getDate()}`;
    return formattedDate;
  }
};
