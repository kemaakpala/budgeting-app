import React from 'react'
import Divider from '../Divider'
import Typography from '../Typography'
import './Box.css'

export default (props) => {
  const {children, header, footer, className, close: CloseButton} = props;

  return (
    <div className={`box ${className}`}>
      { header 
          ? <div className="box-header"><Typography component="h2">{header}</Typography> {props.close && <CloseButton />}</div>
          : null
      }
      <Divider />
      <div className="box-body">
        {children}
      </div>
      {
        footer
          ? <div className="box-footer">{footer}</div>
          : null
      }
    </div>
  )
}