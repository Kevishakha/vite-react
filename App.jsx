
import React, { useCallback, useEffect, useRef, useState } from 'react'
function App() {
  const [length, setlength]=useState(8)
  const [numberAllow, setNumberAllow]=useState(false)
  const [charAllow, setcharAllow]=useState(false)
    const [password, setPassword]=useState("")
     const generatepassword=useCallback(()=>{
     let pass="";
     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     if(numberAllow) str+="1234567890"
     if(charAllow) str+="!@#$%^&*()"
     for (let i = 0; i <length; i++) {
      let char=Math.floor(Math.random()*length+1)
      pass+=str.charAt(char)
     }
     setPassword(pass)
     },[length,numberAllow,charAllow,setPassword])
   useEffect(()=>{ generatepassword(password)}, [length,numberAllow,charAllow])  
   const PasswordRef=useRef(null)
   const copytoclip=useCallback(()=>{
    PasswordRef.current?.select()
    PasswordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
   },[password])
  return (
    <>
      <div className='w-full max-w-screen-lg mx-auto shadow-md rounded-lg bg-gray-700 my-2 px-4'>
        <h1 className='text-white text-center pt-5 mb-4'> PASSWORD GENERATOR</h1>
          <div className='flex flex-wrap justify-center shadow-md rounded-lg overflow-hidden mb-8 '>
                <input type='text' value={password} placeholder='password' readOnly className='w-10/12 outline-none px-3 rounded-l-md ' ref={PasswordRef} />
                <button className='bg-blue-700 outline-none text-white px-3 py-2 shrink-0 rounded-r-md '  onClick={copytoclip}>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2 mb-8 justify-evenly py-5'>
              <div className='flex gap-x-2 items-center '>
               <input type='range' min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}    />
               <label className='text-white'>length: {length}</label>
               </div>  
              <div  className='flex gap-x-2 items-center  '>
               <input type='checkbox' defaultChecked={numberAllow} onChange={()=>{setNumberAllow((prev)=>!prev)}} id='numberinput'   />
               <label htmlFor='numberAllow' className='text-white'> Number</label>
               </div>
               <div  className='flex gap-x-2 items-center  '>
               <input type='checkbox' defaultChecked={charAllow} onChange={()=>{setcharAllow((prev)=>!prev)}}    />
               <label htmlFor='charAllow' className='text-white'>Character</label>
               </div>
         </div>
      </div>  
    </>
  )
}
export default App




