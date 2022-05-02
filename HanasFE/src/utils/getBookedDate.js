import dayjs from "dayjs";

import getLastDay from "./getLastDay";

export default getBookedDate = (bookingsData) => {
  let temp = [];
  let temp2 = [];
  let temp3 = [];
  bookingsData.map((bookingData) => {
    if (
      bookingData.book_type === "Single" &&
      (bookingData.book_status === "Accepted" ||
        bookingData.book_status === "Ongoing")
    ) {
      temp.push(new Date(bookingData.booked_dateTimeStart));
    }
  });

  bookingsData.map((bookingData) => {
    if (
      bookingData.book_type === "Multiple" &&
      (bookingData.book_status === "Accepted" ||
        bookingData.book_status === "Ongoing")
    ) {
      let dateStart = new Date(bookingData.booked_dateTimeStart);
      let dateEnd = new Date(bookingData.booked_dateTimeEnd);
      let tempDateEnd = new Date(dateEnd);

      if (
        dayjs(bookingData.booked_dateTimeStart).format("MM") ===
        dayjs(bookingData.booked_dateTimeEnd).format("MM")
      ) {
        for (let i = dateStart.getDate(); i <= dateEnd.getDate(); i++) {
          temp2.push(new Date(dateStart.setDate(i)));
        }
      } else {
        for (
          let i = dateStart.getDate();
          i <= getLastDay(dateStart.getFullYear(), dateStart.getMonth());
          i++
        ) {
          temp2.push(new Date(dateStart.setDate(i)));
        }
        for (let i = 1; i <= dateEnd.getDate(); i++) {
          temp3.push(new Date(tempDateEnd.setDate(i)));
        }
      }
    }
  });
  const mergedArray = [...temp, ...temp2, ...temp3];

  return mergedArray;
};
