import { useState } from 'react'

interface Person {
  firstName: string
  lastName: string
}

interface Props {
  text: String
  ok?: boolean
  i?: number
  fn?: (bob: string) => string
  person?: Person
}

// ? means the property is optional, while you passing on by props, to define the type of

const TextField: React.FC = ({}) => {
  const [count, setCount] = useState<number | null>(5)

  return (
    <div>
      <input type="text" defaultValue={'aaa'} />
    </div>
  )
}

export default TextField
