import { ethers } from "ethers";
import React from 'react'

const Metamask = ({setConnectedWallet}) => {

    let provider;
    let signer;
    let hasSigner;

    const connectWallet = async() => {
        if (window.ethereum == null) {
            console.log("MetaMask not installed; using read-only defaults");
            provider = ethers.getDefaultProvider();
            setConnectedWallet(provider);    
        } else {
            provider = new ethers.BrowserProvider(window.ethereum);
            signer = await provider.getSigner();
            setConnectedWallet(signer);
        }
    }

    const spectate = () => {
        setConnectedWallet('0');
    }

    const checkConnection = async() => {
        provider = new ethers.BrowserProvider(window.ethereum);
        hasSigner = await provider.hasSigner();
        if (hasSigner) {
            signer = await provider.getSigner();
            setConnectedWallet(signer);
        }
        console.log(signer)
    }
    
    checkConnection();

  return (
    <div className="mainApp">
    <h3>Connect your wallet firstly to get in App</h3>
    <button onClick={() => connectWallet()}>Connect wallet</button>
    <button onClick={() => spectate()}>Join as spectator</button>
    </div>
  )
}

export default Metamask
