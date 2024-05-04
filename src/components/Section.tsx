
import {ReactNode} from 'react'


type SectionProps ={
  title?:string,
  children: ReactNode
}

export const Section= ({
  title,
  children
}:SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
}
