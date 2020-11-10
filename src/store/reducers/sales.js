import * as actionTypes from '../action/actionTypes';

const initialState = {
    salesData: [],
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_SALES: 
            return {
                ...state,
                salesData: action.salesData
            }
        
        default:
            return state;
    }

}

export default reducer;
