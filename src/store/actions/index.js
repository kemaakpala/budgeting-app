
import { FETCH_BUDGET_SUCCESS, FETCH_BUDGET_FAILED, FETCH_BUDGET_START } from './actionTypes';

export const budgetStart = () => ({ type: FETCH_BUDGET_START })
export const fetchBudgetSuccess = (data) => ({
  type: FETCH_BUDGET_SUCCESS,
  data,
});
export const fetchBudgetFailed = (error) => ({
  type: FETCH_BUDGET_FAILED,
  error,
})

export const fetchBudget = () => {
  return  (dispatch) => {
    dispatch(budgetStart());
    return fetch("http://localhost:3000/month")
      .then(response => response.json())
      .then(data => {
        dispatch(fetchBudgetSuccess(data))
      })
      .catch(error => {
        dispatch(fetchBudgetFailed(error))
      });
  }
}