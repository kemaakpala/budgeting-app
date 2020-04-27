import React from 'react'

export default ({ id, variant, label, value, changed, options}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <select id={id} value={value} onChange={changed}>
      {
        options.map(({key, value, label}) => (
          <option key={key} value={value}>
            {label}
          </option>
        ))
      }
    </select>
  </>
)