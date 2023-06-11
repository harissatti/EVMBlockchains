import { useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [chainId, setChainId] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [WalletAddress,setWalletAddress]=useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(tokenAddress && chainId && receiverAddress && tokenAmount){
      try {
        const response=await axios.post(
          "http://192.168.18.20:3000/transferToken",{
            tokenAddress:tokenAddress,
            chainId:chainId,
            receiverAddress:receiverAddress,
            amount:tokenAmount,
          }
        );
        console.log("API response:", response.data);
  
      } catch (error) {
        console.error("API error:", error);
          // Handle the error as needed
      }
    }
    else{
      console.log("Please fill in all the fields.");
    }
  }

  const handleBalanceSubmit= async(e)=>
  {
    e.preventDefault();
    if(tokenAddress && WalletAddress && chainId){
      try{
        const  response=await axios.post("http://192.168.18.20:3000/getAllTokenBalance",{
          contractAddress :tokenAddress,
          chainId : chainId,
          walletAddress : WalletAddress,
        }
        );
        console.log("API response:", response.data);
        // Handle the response as needed
      } catch (error) {
        console.error("API error:", error);
        // Handle the error as needed
      }
      }
      else {
        console.log("Please fill in all the fields.");
      }
    }




  const  handleChange=async(e)=>{
    const {name,value}=e.target;
    if(name==="tokenAddress"){setTokenAddress(value); }
    else if (name==="chainId"){ setChainId(value)}
    else if (name === 'receiverAddress') setReceiverAddress(value);
    else if (name === 'tokenAmount') setTokenAmount(value);
  }

  const handleBalanceChange=(e)=>{
    const {name , value}=e.target;
    if(name==="tokenAddressBalance") setTokenAddress(value);
    else if (name==="WalletAddress") setWalletAddress(value);
    else if(name==="Chain_Id") setChainId(value);
  }


  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label>
          Token Address
          <input type='text' name='tokenAddress' value={tokenAddress} onChange={handleChange}></input>
        </label>
        <br/>
        <label>
          Chain ID
          <input type='text'name='chainId' value={chainId} onChange={handleChange}></input>
        </label>
        <br/>
        <label>
          Reciver Amount
          <input type='text' name='receiverAddress' value={receiverAddress} onChange={handleChange}></input>
        </label>
        <br/>
        <label>
          Token Amount:
          <input type="text" name="tokenAmount" value={tokenAmount} onChange={handleChange} />
        </label>
        <br />
        <button type="submit" className="custom-button">Submit</button>


      </form>
      <h3>Get ALLToken Address</h3>
      <form onSubmit={handleBalanceSubmit}>
        <label>
          tokenAddress<input type="text" name="tokenAddressBalance" value={tokenAddress} onChange={handleBalanceChange}/>
        </label>
        <br/>
        <label>
          wallet Address:
          <input type="text" name="WalletAddress" value={WalletAddress} onChange={handleBalanceChange}/>
        </label>
        <br/>
        <label>
          Chain Id:
          <input type="text" name="Chain_Id" value={chainId} onChange={handleBalanceChange}/>
        </label><br/>
        <button type="submit">submit</button>

      </form>


    </div>
  )
}

export default App
