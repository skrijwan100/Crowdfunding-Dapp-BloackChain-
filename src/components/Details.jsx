import React, { useEffect, useState } from 'react'
import icone from "../assets/icone.jpg"
import { useParams } from 'react-router';
import campcontract from "../../artifacts/contracts/Campaign.sol/CampaignFactory.json"
import camp from "../../artifacts/contracts/Campaign.sol/Campaign.json"
import { ethers } from 'ethers'
export default function Details() {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [story, setstory] = useState('')
  const [image, setimage] = useState('')
  const [requireAmount, setrequireAmount] = useState('')
  const [receiveAmount, setreceiveAmount] = useState('')
  const [Loder, setLoder] = useState(false)
  useEffect(() => {
    const fetchcampdata = async () => {
      setLoder(true)
      const infuraProvider = new ethers.JsonRpcProvider(
        import.meta.env.VITE_INFURA_URL
      )
      const compaingcontract = new ethers.Contract(
        id,
        camp.abi,
        infuraProvider
      )

      const title = await compaingcontract.title();
      const story = await compaingcontract.story()
      const image = await compaingcontract.imgeUrl()
      const requireAmount = await compaingcontract.requireAmount()
      const receiveAmount = await compaingcontract.receiveAmount()
      console.log("Campaign title:", title);
      setTitle(title)
      setimage(image)
      setreceiveAmount(ethers.formatEther(receiveAmount))
      setrequireAmount(ethers.formatEther(requireAmount))
      const res = await fetch(`https://${import.meta.env.VITE_GATEWAY_URL}/ipfs/${story}`)
      const resdata = await res.json()
      setstory(resdata.story)
      setLoder(false)
      // console.log(campaign)


    }
    fetchcampdata()
  }, [])
  return (
    <>
      <div className='min-h-[90vh] flex items-center   justify-between bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6' style={{ marginTop: "80px" }}>



        {Loder?<div className='w-full h-full flex justify-center items-center '><div className='lodermain'></div></div>:<div className="left" style={{ marginLeft: "10px" }}>
          <div className="image flex justify-center">
            <img src={`https://${import.meta.env.VITE_GATEWAY_URL}/ipfs/${image}`} alt="" style={{ width: "300px", height: "350px", borderRadius: "10px" }} />
          </div>
          <div className="story" style={{ width: "40vw", color: "white", marginTop: "20px", lineHeight: "1.6", marginLeft: "10px" }}>
            {story}
          </div>
        </div>}
        {Loder?"":<div className="right" style={{ padding: "20px" }}>
          <div className="title">
            <p className='text-5xl text-white mb-6 text-center'>{title}</p>
          </div>
          <div className="inputform" style={{ marginTop: "20px" }}>
            <form action="" className="flex gap-2 items-center justify-center">
              <input type="text" name="" id="hii" className='bg-[#470879] p-2 rounded outline-none border-2 border-[#c345cb] text-white placeholder:text-white' style={{ height: "55px", width: "300px", padding: "15px" }} placeholder="Enter amount" />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer " style={{ height: "55px", width: "120px", }}>Donate</button>
            </form>
          </div>
          <div className="moneymange" style={{ display: "flex", gap: "34px", marginTop: "20px", alignItems: "center", justifyContent: "center" }}>
            <div className="box1" style={{ height: "75px", width: "200px", border: "1px solid white", borderRadius: "8px", padding: "10px", color: "white" }}>
              <p className='text-center text-xl'>Required Amount </p>
              <p className='text-center text-xl'>{requireAmount}</p>
            </div>
            <div className="box2" style={{ height: "75px", width: "200px", border: "1px solid white", borderRadius: "8px", padding: "10px", color: "white" }}>
              <p className='text-center text-xl'>Resived Amount </p>
              <p className='text-center text-xl'>{receiveAmount}</p>
            </div>
          </div>
          <div className='moneyshow' style={{ width: "50vw", height: "300px", border: "1px solid white", borderRadius: "8px", padding: "15px", marginTop: "20px", color: "white" }}>
            <p className="text-xl text-center bg-[#841ef8]">All country</p>
          </div>
          <div className="mycountry" style={{ marginTop: "20px", color: "white" }}>
            <p className="text-xl text-center  bg-[#841ef8] ">My country</p>
          </div>
        </div>}
      </div>

    </>
  )
}
