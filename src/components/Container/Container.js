import React, {useState} from 'react'
import {ethers} from 'ethers'


const Container = ({connectedWallet}) => {

    const contractAddress = '0x12251b47F323908F6Ec8757b1b573597F758C57C';
    const contractAbi = [
              "function setAnimal(string memory _animal)",
              "function getAnimal() view returns(string memory)"
          ]
    const contract = new ethers.Contract(contractAddress, contractAbi, connectedWallet);

    const [inputValue, setinputValue] = useState('');
    const [animal, setAnimal] = useState('');

  return (
    <div className='mainApp'>
            <h1>Get Animal App</h1>
            <h3>Type animal to storage</h3>
            <input value={inputValue} onChange={(e) => setinputValue(e.target.value)} placeholder='ex. Wolf'/>
            <div className='buttons'>

                <button onClick={async() => {
                    await contract.setAnimal(inputValue);
                }}>Send to blockchain</button>

                <button onClick={async() => {
                    setAnimal(await contract.getAnimal())
                }}>Get from blockchain</button>
            </div>

            {animal ? <h3 className='animalh3'>Your animal is: <p className='animal'>{animal}</p></h3> : null}

        </div>
  )
}

export default Container