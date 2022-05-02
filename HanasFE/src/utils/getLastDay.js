export default getLastDay = (y, m) => {
  return new Date(y, m + 1, 0).getDate();
};
