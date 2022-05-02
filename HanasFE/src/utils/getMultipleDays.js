import dayjs from "dayjs";
import getLastDay from "./getLastDay";

export default getMultipleDays = (dateTimeStart, dob) => {
  let myBookedDateArray = [];
  let myBookedDateArray2 = [];
  let tempDate = new Date(dateTimeStart);
  let tempDateNewMonth = new Date(dob);

  if (dateTimeStart.getMonth() === dob.getMonth()) {
    for (
      let i = parseInt(dayjs(dateTimeStart).format("DD"));
      i <= parseInt(dayjs(dob).format("DD"));
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

    for (let i = 1; i <= dob.getDate(); i++) {
      console.log(i);
      myBookedDateArray2.push(new Date(tempDateNewMonth.setDate(i)));
    }
  }

  let mergeBookedDateArray = [...myBookedDateArray, ...myBookedDateArray2];

  return mergeBookedDateArray;
};
