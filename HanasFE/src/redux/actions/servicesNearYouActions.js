import { ServicesNearYouActions } from "./types";
import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";

export const getServicesNearYou = (DATA) => async (dispatch) => {
    let token = await getItem("token");

    dispatch({ type: ServicesNearYouActions.SERVICES_NEAR_YOU_LOADING });

    try{
        let { data } = await axios.post(
            "/api/client/get-worker-with-specific-service",
            { DATA },
            { headers: { Authorization: `Bearer ${token}` } }
          );
        
          if(data.service_worker){
              dispatch({ type: ServicesNearYouActions.SERVICES_NEAR_YOU_DETAILS, payload: data.service_worker});

              dispatch({ type: ServicesNearYouActions.SERVICES_NEAR_YOU_SUCCESS});
          }
        
    }catch(err){
        console.log(err);
        let error = err.response.data ? err.response.data : err;
        dispatch({ type: ServicesNearYouActions.SERVICES_NEAR_YOU_FAIL, payload: error});
    }
};