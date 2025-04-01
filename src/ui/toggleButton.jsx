"use client"
import React,{ useState }  from 'react'
import Image from 'next/image';
const toggleButton = () => {
    const [modeLight, setModeLight] = useState(true);

  return (
    <div className='cursor-pointer'>
        {modeLight
            ?<Image onClick={()=>setModeLight(!modeLight)} src={'/assets/dark-mode.png'} width={50} height={32} alt='darkmode' />
            :<Image onClick={()=>setModeLight(!modeLight)} src={'/assets/light-mode.png'} width={50} height={32} alt='lightmode' /> 
        }
    </div>
  )
}

export default toggleButton
