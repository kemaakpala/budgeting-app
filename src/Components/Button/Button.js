import React from 'react';
import './Button.css';

export default (props) => <button className={`btn ${props.variant} ${props.className}`} title={props.title}>{props.children}</button>