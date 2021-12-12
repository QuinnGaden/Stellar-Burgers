import React from 'react';

function MenuItem(props) {
  return (
    <li className={props.styles}>
      
      {props.text && <p className={props.textStyles}>{props.text}</p>}
    </li>
  )
}

export default MenuItem;