import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import pic from "../assets/icone.jpg"
import campcontract from "../../artifacts/contracts/Campaign.sol/CampaignFactory.json"
import { ethers } from 'ethers'
export default function Home() {
  const [campaing, setCampaing] = useState([])
  const [Loder, setLoder] = useState(false)
  useEffect(() => {
    const fecthdata = async () => {
      setLoder(true)
      const infuraProvider = new ethers.JsonRpcProvider(
        import.meta.env.VITE_INFURA_URL
      )
      const contract = new ethers.Contract(
        import.meta.env.VITE_CONTRACT_DEPOLY_ADDRESS,
        campcontract.abi,
        infuraProvider
      )
      const depolcontract = await contract.filters.Campaigncreated()
      const events = await contract.queryFilter(depolcontract)
      console.log(events)
      setCampaing(events)

      setLoder(false)

    }
    fecthdata()
  }, [])
  return (
    <>
      <div className='min-h-[90vh] flex items-center justify-evenly  bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6' style={{ marginTop: "80px" }}>

        {Loder && campaing ? <div className='w-full h-full flex justify-center items-center '><div className='lodermain'></div></div> :campaing.map((data,index)=>(
          <div className='cursor-pointer addhover'  key={index} style={{ width: "320px", height: "420px", border: "3px solid #b14fff", borderRadius: "10px", backgroundColor: "#470879", boxShadow: "0px 0px 6px 7px #000000e6", marginLeft: "10px" }}>
          <div className="img flex w-full items-center justify-center">
            <img src={`https://${import.meta.env.VITE_GATEWAY_URL}/ipfs/${data.args.imgUrl}`} alt="" style={{ width: "230px",height:"210px" }} />
          </div>
          <div className="title flex justify-center">
            <p className='text-xl font-extrabold text-white'>{data.args.title}</p>
          </div>
          <div className="owner flex justify-between" style={{ padding: "10px" }} >
            <span className='text-xl text-white' >Owner</span> <span className='text-xl text-white'  >{data.args.owner.slice(0, 4)}...{data.args.owner.slice(-4)}</span>
          </div>
          <div className="money  flex justify-between" style={{ padding: "10px" }}>
            <span className='text-xl text-white' >Need Amount</span> <span className='text-xl text-white'>{data.args.requireAmount} ETH</span>
          </div>
          <div className="time flex justify-center ">
            <p className='text-xl text-white'> {new Date(parseInt(data.args.timestamp) * 1000).toLocaleString()}</p>
          </div>
          <div className="btn flex justify-center">
            <button style={{ padding: "10px", width: "300px", marginTop: "5px" }} className="bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
              Donate
            </button>
          </div>
        </div>

        )) }
      </div>
    </>
  )
}
