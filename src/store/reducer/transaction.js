import { FETCH_TRANSACTION_SUCCESS, FETCH_TRANSACTION_FAILED, FETCH_TRANSACTION_START } from '../actions/actionTypes';

const transactionReducer = (state = { loading: false, transactions: [], error: null }, action) => { 
  switch (action.type) {
    case FETCH_TRANSACTION_START:
      return { loading: true }
    case FETCH_TRANSACTION_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.data
        }
    case FETCH_TRANSACTION_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
}

export default transactionReducer