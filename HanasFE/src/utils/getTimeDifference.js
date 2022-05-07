/**
 * Calculates the difference between the two times.
 * Example: 7:00 - 9:30 = 2:30
 *
 * @param start Start time
 * @param end End time
 */
export default getTimeDifference = (start, end) => {
  start = start.split(":");
  end = end.split(":");
  let startDate = new Date(0, 0, 0, start[0], start[1], 0);
  let endDate = new Date(0, 0, 0, end[0], end[1], 0);
  let diff = endDate.getTime() - startDate.getTime();
  let hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  let minutes = Math.floor(diff / 1000 / 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  console.log(minutes);

  if (hours < 0) hours = hours + 24;

  return parseFloat(`${hours}.${minutes}`);
};
