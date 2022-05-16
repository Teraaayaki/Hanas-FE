/**
 * Calculates the date of the last of the month.
 * Example: Last Day of May = 31
 *
 * @param y Year
 * @param m Month
 */
export default getLastDay = (y, m) => {
  return new Date(y, m + 1, 0).getDate();
};
