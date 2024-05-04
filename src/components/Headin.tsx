import React from 'react'
import {ReactElement} from 'react'
type HeadinProps = {title:string}

const Headin = ({title}:HeadinProps) :ReactElement => {
  return ( <h1>{title}</h1>
  )
}
export default Headin