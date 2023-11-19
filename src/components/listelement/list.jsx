import React from 'react'

export default function List(props) {
  return (
    <li className={props.className}>{props.label1}{props.label2}</li>
  )
}
