import { WorkerSchedule } from './types';
import axios from '@axios';
import { getItem } from '@helpers/asyncStorage';

export const getSchedules = () => async (dispatch) => {
  let token = await getItem('token');

  try {
    let { data } = await axios.get('/api/worker/accepted-bookings', {
      headers: { authorization: `Bearer ${token}` },
    });

    console.log(data.acceptedBookings);

    dispatch({
      type: WorkerSchedule.FETCH_SCHEDULES,
      payload: data.acceptedBookings,
    });
  } catch (err) {
    console.log(err);
  }
};
