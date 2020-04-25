import React from 'react';
import './GroupBlockItem.css'

const GroupBlockItem = (props) => {
  const { title, planned, spent, remaining } = props;
  return (
    <>
      <ul className='itemRow'>
        <li>
          {title}
        </li>
        <li>
          Planned: {planned}
        </li>
        <li>
          Spent / Remaining : {spent} / {remaining}
        </li>

      </ul>
    </>
  )
}

export default GroupBlockItem