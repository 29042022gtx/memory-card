import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'
import { CardList } from './components/CardList'

function App() {

  return (
    <>
      <Header />
      <CardList />
    </>
  )
}

export default App
