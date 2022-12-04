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
export const getMilliseconds = (h, m, s) => (h * 60 * 60 + m * 60 + s) * 1000;
