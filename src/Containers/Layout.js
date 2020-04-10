import React from 'react';
import GroupBlock from '../Components/GroupBlock';
import TransactionBlock from '../Components/TransactionBlock';
const Layout = () => {
  return (
    <>
      <header>this is the header</header>
      <main>
        <GroupBlock />
        <GroupBlock />
        <GroupBlock />
        <GroupBlock />
        <TransactionBlock />
      </main>
      <footer> this is the footer</footer>
    </>
  );
}

export default Layout;