import React, { useState } from 'react';

const TransactionBlock = () => {
  const [amount, setAmount] = useState(0);
  const [group, setGroup] = useState('0');
  const [groupItem, setGroupItem] = useState('0');
  const onAmountChangeHandler = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  }

  const onGroupSelctChangeHandler = (e) => {
    e.preventDefault();
    setGroup(e.currentTarget.value);
  }

  const onGroupItemSelectChangeHandler = (e) => {
    e.preventDefault();
    setGroupItem(e.currentTarget.value);
  }

  return (
    <>
      <form>
        <label htmlFor="Amount">Amount </label>
        <input id="Amount" type="text" value={amount} onChange={onAmountChangeHandler} />
        <br />
        <label htmlFor="Group">Group {group}</label>
        <select id="Group" value={group} onChange={onGroupSelctChangeHandler}>
          <option value="0" >Select a group</option>
          <option value="1" >Housing </option>
        </select>
        <br />
        <label htmlFor="GroupItem">Group Item {groupItem}</label>
        <select id="GroupItem" value={groupItem} onChange={onGroupItemSelectChangeHandler}>
          <option value="0" >Select a group item</option>
          <option value="1" >item 1</option>
        </select>
      </form>
    </>
  );
}

export default TransactionBlock;