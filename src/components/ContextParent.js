import React,{ useState} from 'react'
// import { ChildA } from './ContextChild'

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider


export const ContextParent = ({children}) => {
    const [count,setCount] = useState(0)

    console.log("Context Parent render")
  return (
    <div>
      <button onClick={() => setCount ((c) => c+1)}>Count - {count}</button>
      <CountProvider value = {count}> 
        {children}
      </CountProvider>
    </div>
  )
}

