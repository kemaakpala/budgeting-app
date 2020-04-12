import React, { useState, useEffect } from 'react';
import GroupBlock from '../Components/GroupBlock';
import TransactionBlock from '../Components/TransactionBlock';

const BudgetPage = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [groupData, setGroupData] = useState({});
  
  useEffect(() => {
    fetch("http://localhost:3004/month/jan/group")
    .then((res) => res.json())
    .then((result) => {
      console.log('res: ', result);
      setIsLoaded(true)
      setGroupData(result);
    }, (error) => {
      setIsLoaded(true)
      console.log(error);
    })
  }, []);
  let returnValue = ( <div>...Loading</div>)
  if ( isLoaded) {
    console.log('groupData[0]: ', groupData[0]);
    const {title, groupItems} = groupData[0];
    // console.log(title, groupItems)
    returnValue = (
      <>
        <h1>{props.match.params.month} Budget</h1>
        <GroupBlock title={title} groupItems={groupItems}/>
        <TransactionBlock />
      </>
    );
  }

  return returnValue
  
}

export default BudgetPage;