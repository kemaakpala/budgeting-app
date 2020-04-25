import React from 'react';
import './GroupBlockItem.css'
import Typography from '../../Typography'
import Divider from '../../Divider'

const GroupBlockItem = (props) => {
  const { title, planned, spent, remaining } = props;
  return (
    <>
      <ul className='itemRow'>
        <li>
          <Typography component="p">{title}</Typography>
        </li>
        <li>
          <Typography component="p">Planned: {planned}</Typography>
        </li>
        <li>
        <Typography component="p"> Spent / Remaining : {spent} / {remaining}</Typography>
        </li>

      </ul>
      <Divider />
    </>
  )
}

export default GroupBlockItem