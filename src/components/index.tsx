import React from 'react'
import { ContextProvider } from '../assets/context'
import Global from '../styled/global'
import { Header } from './header'
import Search from './search'

const MainPage = () => {

  return(
    <>
      <Global />
      <Header />
      
      <ContextProvider>
        <Search />

      </ContextProvider>
    </>
  )
}

export default MainPage