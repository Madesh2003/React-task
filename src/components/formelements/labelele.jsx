import React from 'react'

export default function Labelele(props) {
  return (
     <label for={props.for} className={props.className} >{props.label}</label>
  )
}
