import React from 'react'
import { useState } from 'react'
import { ReactNode } from 'react'

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>
  children: ReactNode
}

export const Counter = ({ setCount, children }: CounterProps) => {
  return (
    <div>
      <h1>
        {children}
        <button
          onClick={() => {
            setCount((pre) => pre + 1)
          }}>
          +
        </button>
        <button
          onClick={() => {
            setCount((pre) => pre - 1)
          }}>
          -
        </button>
      </h1>
    </div>
  )
}

export default Counter
