import React from 'react'
import './Box.css'

export default (props) => {
  const {children} = props;
  return <div className="box">{children}</div>
}