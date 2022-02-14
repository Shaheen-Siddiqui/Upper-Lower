import React, { useState } from 'react'
import Navbaar from './components/Navbaar'
import Textform from './components/Textform'

const App = () => {
  let [mode,setMode]=useState('dark');

  const enableDarkMOde=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor="white"
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='grey'
    }
  }

  return (
    <>
<Navbaar
  mode={mode}
  enableDarkMOde={enableDarkMOde}
/>

<div style={{fontWeight:"bold",color:mode=='dark'? 'yellow':'red' }} className="container my-5">
<Textform 
  mode={mode}

/>
</div>
</>
  )
}

export default App
