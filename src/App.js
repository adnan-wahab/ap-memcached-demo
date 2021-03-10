import logo from './Fill 16.png';
import avatar from './Image 10.png';

import './App.css';
import './index.css';
import {useState, useEffect, useRef} from 'react'
import { Cell, Column, Table } from "@blueprintjs/table";
import AdnanTable from './AdnanTable';
import Cache from './Cache';


let SIZE = '125px'

let AddressList = ({addresses, selected, setSelected}) => {
  return <AdnanTable results={addresses} selected={selected} onClick={(address) => setSelected(address) }/>
  return <div className="max-h-screen overflow-scroll">{
    Object.values(addresses).map(({address, balance}) => 
      <div onClick={() => { setSelected(address)}}
           key={address} className={"border flex flex-row mb-5 hover:bg-blue-700"}>
          <div className="m-5">{address} : {balance}</div>
        </div>
    )}
    </div>
}

let TXItem = ({hash, from, to, timestamp}) => {
  return <div key={timestamp} className="border-gray-500 border flex flex-row mb-5">

  <div className="m-5">
    <div className="text-2xl">{hash}</div>

    <div className="text-gray-500 mt-10">
    <span >{from}</span> > <span >{to}</span> @ <span >{timestamp}</span>

    </div>
  </div>



  </div>
}

let TXList = ({tx}) => {
  if (! tx.result) return 'none'
    const cellRenderer = (rowIndex: number) => {
      return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
  };
  console.log(tx.result)
  return <Table numRows={tx.result.length}>
      <Column name="hash" cellRenderer={r => <Cell>{tx.result[r].hash}</Cell>}/>
      <Column name="from" cellRenderer={r => <Cell>{tx.result[r].from}</Cell>}/>
      <Column name="to" cellRenderer={r => <Cell>{tx.result[r].to}</Cell>} />
      <Column name="timestamp" cellRenderer={r => <Cell>{tx.result[r].timeStamp} </Cell>}/>
  </Table>
  return <div className="max-h-screen overflow-scroll">{Object.values(tx.result).map(TXItem)}</div>
} 


const etherscanAPIKey = 'U8H4W5FISNII21GRNASJ1VJ1KGKPJ2K7KR' //move to process.env

const etherScan = (address) => 
`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${etherscanAPIKey}`


let local = localStorage.getItem('addresses') ? JSON.parse(localStorage.getItem('addresses')) : []

const etherScanTransactions = (address) => `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${etherscanAPIKey}`
function App() {
  let [addresses, setAddresses]  = useState(local) 
  let [tx, setTx]  = useState('')
  let [selected, setSelected] = useState()
  let [filter, setFilter] = useState('')

  let inputRef = useRef()

  useEffect(() => {
    if (Cache.has(selected)) return setTx(Cache.get(selected))


    fetch(etherScanTransactions(selected))
      .then(response => response.json())
      .then(result => {
        setTx(result)
        Cache.set(selected, result)
      })
  }, [selected])

  const handleSubmit = async () => {
    let address = inputRef.current.value
    inputRef.current.value = ''

    if (addresses.filter(a => a.address === address).length) alert('duplicate address')

    let scan = await fetch(etherScan(address))
    .then(response => response.json())

    if (scan.message === 'NOTOK') return alert(address + ' invalid address')

    let addressesCopy = addresses.concat({address, balance: scan.result})
    setAddresses(addressesCopy)
    localStorage.setItem('addresses', JSON.stringify(addressesCopy))
  }

  return (
    <>
      <div className="p-5 border-b border-gray-50 h-full sm:flex sm:items-center sm:justify-between bg-black mb-10">
    <h3 className="text-lg leading-6 font-medium text-white">
       <img src={logo} className="inline pl-5 pr-5" />
      <span>TRM</span>
    </h3>
    <div className="mt-3 flex sm:mt-0 sm:ml-4">
    <img className="rounded-full" src={avatar} />
    </div>
  </div>
    <div className="max-w-7xl p-10 flex Container">
      <div className="flex-1">
        <h1 className="text-4xl pb-5">Time to start monitoring.</h1>
        <label className="pb-3 block font-medium text-gray-700 text-lg">Address</label>
        <div className="mt-1">

        <input ref={inputRef} type="text" placeholder="Enter Ethereum Address" 
        className="
        mb-5
        p-3
        border-gray
        bg-white
        shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full 
        border border-gray-100sm:text-sm border-gray-300 "/>
          </div>

        <button 
          className="bg-blue-500 text-white px-5 p-3 br-2 mb-5 rounded"
          onClick={handleSubmit}>
          <span className="pr-3 icon"></span>
          Add Address</button>
          <div className="inline">
          <label className="pb-3 font-medium text-gray-700 text-lg pl-5">Filter</label>
          <input className="
                  mb-5
                  ml-2
                  p-3
                  border-gray
                 bg-white
                  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 
                  border border-gray-100sm:text-sm border-gray-300 "
          
          type="text" placeHolder="filter" onChange={(e) => setFilter(e.target.value)}/>
          </div>

          {<AddressList addresses={addresses.filter(d => d.address.match(filter))} 
          selected={selected} setSelected={setSelected} />}
        </div>
        <div className="pl-20 flex-initial">
        {selected && (
          <>
          <h3 className="text-lg mt-5 pb-5">Transactions for {selected}</h3>        
          <TXList tx={tx} />
          </>
        )}
          </div>
    </div>
</>
    
  );
}

export default App;
