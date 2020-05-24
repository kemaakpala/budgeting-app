import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import Typography from '../Components/Typography';
// import Button from '../Components/Button/Button';
// import MonthUtil from '../utils/month';
import './Layout.css';
const Layout = (props) => {
  // const monthRoute = props.match.params.month;
  return (
    <>
      {/* <header>
        <div className="blockWrapper">
          <Typography component="h1">{MonthUtil(monthRoute)} Budget</Typography>
          <Button title="add transaction"><FontAwesomeIcon icon={faPlus}/></Button>
        </div>
      </header> */}
      <main>{props.children}</main>
    </>
  )
}

export default Layout;