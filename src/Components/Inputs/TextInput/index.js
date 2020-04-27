import React from 'react';

export default ({ id, variant, label, value, changed}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input id={id} type={variant} value={value} onChange={changed}/>
  </>
)