export const formatDate = (rawDate) => {
  if (!rawDate) return '';
  const date = rawDate.trim().split(' ')[0];
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
};
