import React from 'react';
import './Typography.css';

export default (props) => {
  const {component: Component, children} = props;
  return <Component> {children} </Component>
}