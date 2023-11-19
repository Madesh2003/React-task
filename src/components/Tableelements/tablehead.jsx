import React from 'react'

export default function Th(props) {
  return (
    <th scope={props.scope} className={props.className}>{props.label}</th>
  )
}

