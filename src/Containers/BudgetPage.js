import React, { useState, useEffect } from 'react';
import GroupBlock from '../Components/GroupBlock';
import TransactionBlock from '../Components/TransactionBlock';
import Typography from '../Components/Typography';
import './BudgetPage.css';
import Button from '../Components/Button/Button';

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
        <Typography component="h1">{props.match.params.month} Budget</Typography>
        <Button><i class="fas fa-plus"></i></Button>
        <div className="blockWrapper"><GroupBlock {...groupData[monthRoute]}/></div>
        <TransactionBlock />
      </>
    );
  }

  return returnValue
  
}

export default BudgetPage;