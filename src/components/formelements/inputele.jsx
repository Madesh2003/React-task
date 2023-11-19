import React from 'react'

export default function Inputele(props) {
  return (
    <input type={props.type} className={props.className} id={props.id} placeholder={props.placeholder} />
  )
}
