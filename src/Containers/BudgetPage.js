import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import GroupBlock from '../Components/GroupBlock';
import TransactionBlock from '../Components/TransactionBlock';
import Typography from '../Components/Typography';
import Button from '../Components/Button/Button';
import MonthUtil from '../utils/month';
import './BudgetPage.css';

const BudgetPage = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [groupData, setGroupData] = useState({});
  
  useEffect(() => {
    const { match: {params : { month}}} = props
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/month");
      const data = await response.json();
      data.forEach(dataItem => {
        if (dataItem[month]) {
          setIsLoaded(Array.isArray(dataItem[month]) && dataItem[month].length > 0)
          setGroupData(dataItem);
        }
      });
    };

    fetchData();
  }, [])

  const monthRoute = props.match.params.month;
  let returnValue = ( <div>...Loading</div>)
  if ( isLoaded) {
    returnValue = (
      <>
        <div className="blockWrapper">
          <Typography component="h1">{MonthUtil(monthRoute)} Budget</Typography>
          <Button variant="roundedCorners" className="alignLeft" title="add transaction"><FontAwesomeIcon icon={faPlus}/></Button>
        </div>
        <div className="blockWrapper flex-direction-column">
          <GroupBlock {...groupData[monthRoute]}/>
        </div>
        <div className="blockWrapper flex-direction-column modal">
          <TransactionBlock />
        </div>
      </>
    );
  }

  return returnValue
  
}

export default BudgetPage;