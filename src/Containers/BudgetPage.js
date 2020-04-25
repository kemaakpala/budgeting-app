import React, { useState, useEffect } from 'react';
import GroupBlock from '../Components/GroupBlock';
import TransactionBlock from '../Components/TransactionBlock';

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
        <h1>{props.match.params.month} Budget</h1>
        <GroupBlock {...groupData[monthRoute]}/>
        <TransactionBlock />
      </>
    );
  }

  return returnValue
  
}

export default BudgetPage;