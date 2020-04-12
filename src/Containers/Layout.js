import React from 'react';
const Layout = (props) => {
  return (
    <>
      <header>this is the header</header>
      <main>{props.children}</main>
      <footer> this is the footer</footer>
    </>
  );
}

export default Layout;