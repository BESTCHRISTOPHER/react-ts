import React, { ReactNode, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Headin from './components/Headin'
import { Section } from './components/Section'
import Counter from './components/Counter'
import { List } from './components/List'

// Conventional props
// const Heading = ({ title }: { title: string }) => {
//   return <h1>{title}</h1>
// }
// const HeadingWithContent = ({
//   children,
// }: {
//   children: ReactNode
// }): ReactElement => {
//   return <h1>{children}</h1>
// }
// //default props
// // const defaultContainerProps = {
// //   heading: <strong>My heading</strong>,
// // }
// // const Container = ({
// //   heading,
// //   children,
// // }: { children: ReactNode } & typeof defaultContainerProps): ReactElement => {
// //   return (
// //     <div>
// //       <h1>{heading}</h1>
// //       {children}
// //     </div>
// //   )
// // }
// // Container.defaultProps = defaultContainerProps
// // better version

// const defaultContainerProps = {
//   heading: <strong>My heading</strong>,
// }

// type ContainerProps = { children: ReactNode } & typeof defaultContainerProps

// const Container = ({ heading, children }: ContainerProps): ReactElement => {
//   return (
//     <div>
//       <h1>{heading}</h1>
//       {children}
//     </div>
//   )
// }
// Container.defaultProps = defaultContainerProps

// //  Functional props
// const TextWithNumber = ({
//   header,
//   children,
// }: {
//   header?: (num: number) => ReactNode
//   children: (num: number) => ReactNode
//   // ? means the header props is optional
// }) => {
//   const [state, stateSet] = useState<number>(1)
//   return (
//     <div>
//       {header && <h2>{header?.(state)}</h2>}
//       <div>{children(state)}</div>
//       <div>
//         <button onClick={() => stateSet(state + 1)}>Add</button>
//       </div>
//     </div>
//   )
// }

// list
// function List <ListItem>({
//   items,
//   render
// }:{
//   items:ListItem[],
//   render:(item:ListItem)=>ReactNode
// }) {
//   return <ul>
//     {items.map((item,index)=>{
//       return <li key={index}>
//         {render(item)}
//       </li>
//     })}
//   </ul>
// }

// use TS in React hooks

const [count, setCount] = useState<number | null>(0)

const App: React.FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(1)
  return (
    <>
      {/* <Heading title={'Hello there'}></Heading>
      <HeadingWithContent>
        <strong>Hi</strong>
      </HeadingWithContent>
      <Container>Foo</Container>
      <TextWithNumber header={(num:number)=><span>Header {num}</span>}>
        {(num: number) => <div>today's num is {num}</div>}
      </TextWithNumber>
      <List items={['jack','Sadie','oso']} render={(item:string)=> <div>{item.toLowerCase()}</div>}/> */}
      <div>course two</div>
      {/* In component folder  */}
      {/* <Headin title={'Hello'} />
<Section title='different title'>this is my section</Section>
<Counter setCount={setCount}>counter is {count}</Counter>
<List items={['coffee','code','taco']} render={(item:string)=>
<span>
  {item}
</span>} /> */}
    </>
  )
}

export default App
