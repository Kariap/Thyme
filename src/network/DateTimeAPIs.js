const base_url = 'https://worldtimeapi.org/api';
export const getTimeZone = tmz => {
  return base_url + '/timezone/' + tmz;
};
