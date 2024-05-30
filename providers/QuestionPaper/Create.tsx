'use client'

import { createContext, useContext, useState } from "react"

export const CreatePaper = createContext<any>(null);

export default function CreateQProvider({children}:{children : React.ReactNode}){
    const [show,setShow] = useState<boolean>()
    return <CreatePaper.Provider value={{show , setShow}}  >{children}</CreatePaper.Provider>
}