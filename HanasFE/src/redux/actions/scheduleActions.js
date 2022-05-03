import { ScheduleActions } from "./types";
import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";

export const removeSchedule = (DATA) => async (dispatch) => {
    let token = await getItem("token");

    dispatch({ type: ScheduleActions.SCHEDULE_LOADING });

    try {
        let {data} = await axios.post(
          "/api/client/remove-schedule",
          { DATA },
          { headers: { authorization: `Bearer ${token}` } }
        )

        if(data){
          dispatch({ type: ScheduleActions.SCHEDULE_SUCCESS });
        }

      } catch (err) {
        console.log(err);
        let error = err.response.data ? err.response.data : err;
        dispatch({
          type: ScheduleActions.SCHEDULE_FAIL,
          payload: error,
        });
      }
}