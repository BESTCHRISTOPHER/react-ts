import React, { ReactNode } from 'react'
import { render } from 'react-dom'

interface ListProps<T> {
  items: T[]
  render: (item: T) => ReactNode
}

export const List = <T,>({ items, render }: ListProps<T>) => {

  
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  )
}
