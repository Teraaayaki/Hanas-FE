import { ClientBookingActions} from "./types";
import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";
import { Actions } from "react-native-gifted-chat";

export const bookSkilledWorker = (data, navigation) => async (dispatch) => {
    let token = await getItem("token");

    dispatch({type: ClientBookingActions.CLIENT_BOOKING_LOADING});

    try{
        let {data} = await axios.post("/api/client/book-skilled-worker", {data}, {headers: {authorization: `Bearer ${token}`}});
        if(data){
            dispatch({type: ClientBookingActions.CLIENT_BOOKING_SUCCESS});
            
        }
    }catch(err) {
        let error = err.response.data ? err.response.data : err;
        dispatch({type: ClientBookingActions.CLIENT_BOOKING_FAIL, payload: error});
    }

}
