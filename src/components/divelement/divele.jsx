import React from 'react'

export default function Div(props) {
  return (
    <div className={props.className}>{props.label1} {props.label2} {props.label3} </div>
  )
}
