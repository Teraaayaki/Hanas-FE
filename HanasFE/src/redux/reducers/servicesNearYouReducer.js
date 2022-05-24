import { ServicesNearYouActions } from "../actions/types";

export const servicesNearYouInitialValues = {
    loading : false,
    success: false,
    servicesData: [],
    error: undefined,
};

const servicesNearYouReducer = (state = servicesNearYouInitialValues, action) => {
    switch(action.type){
        case ServicesNearYouActions.SERVICES_NEAR_YOU_LOADING:
            return { ...state, loading: true, success: false };
        case ServicesNearYouActions.SERVICES_NEAR_YOU_SUCCESS:
            return { ...state, loading: false, success: true};
        case ServicesNearYouActions.SERVICES_NEAR_YOU_DETAILS:
            return { ...state, loading: false, success: false, servicesData: action.payload };
        case ServicesNearYouActions.SERVICES_NEAR_YOU_FAIL:
            return { ...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default servicesNearYouReducer;