import dayjs from "dayjs";
import getLastDay from "./getLastDay";

/**
 * Calculates the booking dates including the start date and the end date.
 * Example. May 31 to June 5 ( May 31, June 1, June 2, June 3, June 4, June 5)
 *
 * @param dateTimeStart Start date of the booking
 * @param dateTimeEnd End date of the booking
 */
export default getMultipleDays = (dateTimeStart, dateTimeEnd) => {
  let myBookedDateArray = [];
  let myBookedDateArray2 = [];
  let tempDate = new Date(dateTimeStart);
  let tempDateNewMonth = new Date(dateTimeEnd);

  if (dateTimeStart.getMonth() === dateTimeEnd.getMonth()) {
    for (
      let i = parseInt(dayjs(dateTimeStart).format("DD"));
      i <= parseInt(dayjs(dateTimeEnd).format("DD"));
      i++
    ) {
      console.log(i);
      myBookedDateArray.push(new Date(tempDate.setDate(i)));
    }
  } else {
    for (
      let i = parseInt(dayjs(dateTimeStart).format("DD"));
      i <= getLastDay(dateTimeStart.getFullYear(), dateTimeStart.getMonth());
      i++
    ) {
      console.log(i);
      myBookedDateArray.push(new Date(tempDate.setDate(i)));
    }

    for (let i = 1; i <= dateTimeEnd.getDate(); i++) {
      console.log(i);
      myBookedDateArray2.push(new Date(tempDateNewMonth.setDate(i)));
    }
  }

  let mergeBookedDateArray = [...myBookedDateArray, ...myBookedDateArray2];

  return mergeBookedDateArray;
};
