import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useReducer,
  useContext,
  MouseEvent,
  KeyboardEvent,
  ReactNode,
  ChangeEvent,
} from 'react'

interface User {
  id: number
  username: string
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

const myNum: number = 37

export const Hooks = () => {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  /////////// useReducer
  const initState = { count: 0, text: '' }

  const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
  }

  type ReducerAction = {
    type: REDUCER_ACTION_TYPE
    payLoad?: string
  }

  const reducer = (
    state: typeof initState,
    action: ReducerAction
  ): typeof initState => {
    switch (action.type) {
      case REDUCER_ACTION_TYPE.INCREMENT:
        return { ...state, count: state.count + 1 }
      case REDUCER_ACTION_TYPE.INCREMENT:
        return { ...state, count: state.count - 1 }
      case REDUCER_ACTION_TYPE.NEW_INPUT:
        return { ...state, text: action.payLoad ?? '' }
      default:
        throw new Error()
    }
  }

  type ChildrenType = {
    children: (num: number) => ReactNode
  }

  const [state, dispatch] = useReducer(reducer, initState)

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payLoad: e.target.value,
    })
  }
  // useEffect
  useEffect(() => {
    console.log('mounting')
    console.log('Users:', users)
    return () => console.log('unmounting')
  }, [users])

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 2),
    []
  )

  const retsult = useMemo<number>(() => fib(myNum), [myNum])

  return (
    <div>
      <h1>{count} </h1>
      <button onClick={addTwo}>Add</button>
      <h2>{retsult}</h2>
      <input type="text" onChange={handleTextInput} />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h2>{state.text}</h2>
    </div>
  )
}
