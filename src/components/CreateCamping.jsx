import React, { useState } from 'react'
import { data } from 'react-router'
export default function CreateCamping() {
  const [Data, setData] = useState({
    title: "",
    story: "",
    amonut: ""
  })
  const [img, setImg] = useState(false)
  const [ipfsstory, setipfsstory] = useState();
  const [ipfsimg, setipfsimg] = useState()
  const [campaingsubmit, setcampaingsubmit] = useState(false)
  const [loder,setLoder]= useState(false)

  const onchange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("title", Data.title);
    formData.append("story", Data.story);
    formData.append("amonut", Data.amonut);
    formData.append("image", img)
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

  }
  const UploadimgIPFS = async (e) => {

    e.preventDefault();
    setLoder(true)
    const imgdata = new FormData();
    imgdata.append("file", img)
    const requesturl = `https://api.pinata.cloud/pinning/pinFileToIPFS`
    console.log(import.meta.env.VITE_PINATA_JWT)
    try {
      
      
      const uploadrequest = await fetch(requesturl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
        },
        body: imgdata
      })
      
      const upload = await uploadrequest.json()
      console.log(upload)
      setipfsimg(upload.IpfsHash)
    } catch (error) {
      console.log(error)
    }
    const requesturlJ = `https://api.pinata.cloud/pinning/pinJSONToIPFS`
    const body = {
      pinataContent: { story: Data.story }
    };
    try {
      const uploadrequest = await fetch(requesturlJ, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      
      const upload = await uploadrequest.json()
      console.log(upload)
      setipfsstory(upload.IpfsHash)
      if(upload){
        setcampaingsubmit(true)
        setLoder(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 pt-24 overflow-hidden' style={{ marginTop: "80px" }}>
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100vw" }}>

        <form style={{ marginTop: "17px" }} onSubmit={onSubmit}>
          <div className='space-y-8'>
            <div className='form-group' style={{ width: "500px" }}>
              <label className='text-white text-2xl font-semibold mb-2 block'>
                Campaign Title
              </label>
              <input
                type="text"
                required
                className='w-full h-[50px] px-[10px] py-[10px] bg-transparent border border-white/50 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors'
                name='title'
                value={Data.title}
                onChange={onchange}
              />
            </div>
            <div className='form-group' style={{ width: "500px" }}>
              <label className='text-white text-2xl font-semibold mb-2 block'>
                Story
              </label>
              <textarea
                className='w-full px-4 py-3 bg-transparent border border-white/50 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors min-h-[120px] resize-y'
                name='story'
                required
                value={Data.story}
                onChange={onchange}
              />
            </div>
            <div className='form-group' style={{ width: "500px" }}>
              <label className='text-white text-2xl font-semibold mb-2 block'>
                Amount you need
              </label>
              <input
                type="number"
                className='w-full h-[50px] px-[10px] py-[10px] bg-transparent border border-white/50 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors'
                name='amonut'
                required
                value={Data.amonut}
                onChange={onchange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="image" className='text-white text-2xl font-semibold mb-2 block'>
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={(e) => setImg(e.target.files[0])}
              className='block w-full text-white border border-white/50 rounded-lg cursor-pointer bg-transparent focus:outline-none px-[10px] py-[10px] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-500 file:text-white hover:file:bg-purple-600'
              name='image'
            />

          </div>
         {campaingsubmit?"": <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <button onClick={UploadimgIPFS} style={{ marginTop: "16px", padding: "10px" }} className="bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors cursor-pointer">
             { loder?<div className='loder'></div>:'Upload pic into IPFS'}
            </button>
          </div>}
          {campaingsubmit ? <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><button type='submit' style={{ marginTop: "20px", padding: "10px" }} className="bg-purple-500  text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors cursor-pointer">
            Start Campaing
          </button>
          </div> : ""}

        </form>
      </div>
    </div >
  )
}
