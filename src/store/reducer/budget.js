
import { FETCH_BUDGET_SUCCESS, FETCH_BUDGET_FAILED, FETCH_BUDGET_START } from '../actions/actionTypes';

const budgetReducer = (state = { loading: false, error: null }, action) => { 
  switch (action.type) {
    case FETCH_BUDGET_START:
      return { loading: true }
    case FETCH_BUDGET_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.data
        }
    case FETCH_BUDGET_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
}

export default budgetReducer