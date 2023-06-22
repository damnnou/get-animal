import React from 'react'
import { useState } from 'react'
import Metamask from '../Metamask/Metamask'
import Container from '../Container/Container'

const App = () => {

  const [connectedWallet, setConnectedWallet] = useState(null);

  return (
    <div className='container'>
        {!connectedWallet  ? 

        <Metamask setConnectedWallet={setConnectedWallet} />
        : 
        <Container connectedWallet={connectedWallet} />

        }
    </div>
  )
}

export default App