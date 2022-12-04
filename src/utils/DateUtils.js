export const formatDateToString = dateObj => {
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let today = dateObj;

  return today.toLocaleDateString('en-US', options);
};
