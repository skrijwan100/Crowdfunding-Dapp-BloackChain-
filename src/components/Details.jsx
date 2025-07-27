import React from 'react'
import icone from "../assets/icone.jpg"
export default function Details() {
  return (
    <div className='min-h-[90vh] flex items-center justify-between bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6' style={{ marginTop: "80px" }}>
      <div className="left" style={{ marginLeft: "10px" }}>
      <div className="image">
        <img src={icone} alt="" style={{ width: "270px", height: "230px", borderRadius: "10px" }} />
      </div>
      <div className="story" style={{ width: "30vw", color: "white", marginTop: "20px", lineHeight: "1.6" }}>
        A story of a cat could be about a curious feline named Whiskers who embarks on an adventure after his favorite treats disappear, leading him to discover a group of squirrels enjoying them in the park. Another tale could involve a brave little cat who, with the help of a squirrel friend, finds a hidden treasure of acorns and a cozy blanket in a cave. Alternatively, a story could focus on a cat's love for its owner, even when it experiences the freedom of being alone, ultimately leading it to seek out its human companion despite the challenges.
      </div>
      </div>
      <div className="right" style={{ padding: "20px" }}>
      <div className="title">
        <p className='text-5xl text-white mb-6 text-center'>This is title</p>
      </div>
      <div className="inputform" style={{marginTop:"20px"}}>
        <form action="" className="flex gap-2 items-center justify-center">
        <input type="text" name="" id="hii" className='bg-[#470879] p-2 rounded outline-none border-2 border-[#c345cb] text-white placeholder:text-white' style={{height:"45px",width:"300px",padding:"15px"}} placeholder="Enter amount"/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer " style={{height:"45px",width:"120px",}}>Donate</button>
        </form>
      </div>
      <div className="moneymange" style={{ display: "flex", gap: "34px", marginTop: "20px",alignItems:"center",justifyContent:"center" }}>
        <div className="box1" style={{ height: "75px", width: "200px", border: "1px solid white", borderRadius: "8px", padding: "10px", color: "white" }}>
        </div>
        <div className="box2" style={{ height: "75px", width: "200px", border: "1px solid white", borderRadius: "8px", padding: "10px", color: "white" }}>
        </div>
      </div>
      <div className='moneyshow' style={{ width: "50vw", height: "300px", border: "1px solid white", borderRadius: "8px", padding: "15px", marginTop: "20px", color: "white" }}>
        <p className="text-xl">All country</p>
      </div>
      <div className="mycountry" style={{ marginTop: "20px", color: "white" }}>
        <p className="text-xl">My country</p>
      </div>
      </div>
    </div>
  )
}
