import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import GroupBlock from '../Components/GroupBlock';
import TransactionBlock from '../Components/TransactionBlock';
import Typography from '../Components/Typography';
import Button from '../Components/Button/Button';
import MonthUtil from '../utils/month';
import { fetchBudget } from '../store/actions'
import './BudgetPage.css';

const BudgetPage = (props) => {
  useEffect(() => {
    const { onFetchBudget } = props;
    onFetchBudget();
  }, [])

  const isLoading = props.budget.loading;
  const { data } = props.budget;

  const monthRoute = props.match.params.month;

  let returnValue = (<div>...Loading</div>)
  if (!isLoading) {
    data.forEach(dataItem => {
      if (dataItem[monthRoute]) {
        returnValue = (
          <>
            <div className="blockWrapper">
              <Typography component="h1">{MonthUtil(monthRoute)} Budget</Typography>
              <Button variant="roundedCorners" className="alignLeft" title="add transaction"><FontAwesomeIcon icon={faPlus} /></Button>
            </div>
            <div className="blockWrapper flex-direction-column">
              <GroupBlock {...dataItem[monthRoute]} />
            </div>
            <div className="blockWrapper flex-direction-column">
              {/* <div className="modal-back-drop"> */}
                {/* <div className="modal"> */}
                  {/* <Button variant="roundedCorners" className="alignLeft" ><FontAwesomeIcon icon={faTimes} /></Button> */}
                  <TransactionBlock />
                {/* </div> */}
              {/* </div> */}
            </div>
          </>
        );
      }
    })

  }

  return returnValue

}

const mapDispatchToProps = dispatch => {
  return {
    onFetchBudget: () => dispatch(fetchBudget())
  }
}
const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetPage);