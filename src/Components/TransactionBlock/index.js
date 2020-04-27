import React, { useState } from 'react';
import TextInputs from '../Inputs/TextInput'


const TransactionBlock = () => {
  const amount = useInput(0);
  const group = useInput('0');
  const groupItem = useInput('0')

  function useInput (initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChangeHandler = (e) => {
      setValue(e.target.value);
    }

    return {
      value,
      onChange: onChangeHandler
    }
  }

  return (
    <>
      {/* <form> */}
        <label htmlFor="Amount">Amount </label>
        <input id="Amount" type="text" value={amount.value} onChange={amount.onChange} />
        {/* <TextInputs id="Amount" variant="text" value={amount.value} onChange={amount.onChange} /> */}
        <br />
        <label htmlFor="Group">Group {group.value}</label>
        <select id="Group" value={group.value} onChange={group.onChange}>
          <option value="0" >Select a group</option>
          <option value="1" >Housing </option>
        </select>
        <br />
        <label htmlFor="GroupItem">Group Item {groupItem.value}</label>
        <select id="GroupItem" value={groupItem.value} onChange={groupItem.onChange}>
          <option value="0" >Select a group item</option>
          <option value="1" >item 1</option>
        </select>
      {/* </form> */}
    </>
  );
}

export default TransactionBlock;