import {React, createContext} from 'react'
const AppContextProvider = createContext()
export const AppContext = ({chidren}) => {

  return (
    <AppContextProvider.Provider value={{}}>
        {chidren}
    </AppContextProvider.Provider>
  )
}
