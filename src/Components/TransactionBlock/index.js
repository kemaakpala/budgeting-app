import React, { useState } from 'react';
import TextInputs from '../Inputs/TextInput'
import SelectInput from '../Inputs/SelectInput';
import Modal from '../Modal/Modal'

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
      <Modal header="Transactions">
        <TextInputs
          id="Amount"
          variant="text"
          label="Amount"
          value={amount.value}
          changed={(e) => amount.onChange(e)}
        />
        <br />
        <SelectInput
          id="Group"
          label="Group"
          value={group.value}
          changed={(e) => group.onChange(e)}
          options={[
            {key: "0", value: "default", label: "select a group"},
            {key: "1", value: "Housing", label: "Housing"}
          ]}
        />
        <br />
        <SelectInput
          id="GroupItem"
          label="Group Item"
          value={groupItem.value}
          changed={(e) => groupItem.onChange(e)}
          options={[
            {key: "0", value: "default", label: "select a group item"},
            {key: "1", value: "item 1", label: "item 1"}
          ]}
        />
      </Modal>
    </>
  );
}

export default TransactionBlock