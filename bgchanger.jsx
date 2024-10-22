
import React, { useState } from 'react'

function App() {
  const [color, setcolor]=useState("blue")
  return (
    <div className='Container h-screen w-full'
     style={{backgroundColor: color}}>
      <h1>Hello World</h1>



     <div className='bottomdiv flex flex-wrap justify-center  bottom-12 fixed inset-x-0 px-2 rounded-full'>
        <div className='buttondiv flex flex-wrap justify-center bg-white gap-2 shadow-lg px-3 py-2 rounded-full'>
             <button className='bg-red-600' onClick={()=>setcolor("red")}   >red</button>
             <button className='bg-yellow-600' onClick={()=>setcolor("yellow")} >yellow</button>
             <button className='bg-white' onClick={()=>setcolor("white")} >white</button>
             <button className='bg-green-600' onClick={()=>setcolor("green")} >green</button>
             <button className='bg-gray-600' onClick={()=>setcolor("gray")} >gray</button>
             <button className='bg-violet-600' onClick={()=>setcolor("violet")} >violet</button>
             <button className='bg-pink-600' onClick={()=>setcolor("pink")} >pink</button>
             <button className='bg-purple-600' onClick={()=>setcolor("purple")} >purple</button>
        </div>
     </div>


    </div>




  )
}
export default App

