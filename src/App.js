import React, { useState } from 'react'
import Navbaar from './components/Navbaar'
import Textform from './components/Textform'
import Alert from './components/Alert'
import { type } from '@testing-library/user-event/dist/type'

const App = () => {
  let [mode,setMode]=useState('dark');
  let [alert,setAlert]=useState(null);

  const alertAlert=(massage,type)=>{
    setAlert({
      massage:massage,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const enableDarkMOde=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor="white"
      alertAlert('Dark mood has been unabled','success')
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='grey'
      alertAlert('Light mood has been unabled','success')
    }
  }

  return (
    <>
<Navbaar
mode={mode}
enableDarkMOde={enableDarkMOde}/>
<Alert 
alert={alert}
/>

<div style={{fontWeight:"bold",color:mode=='dark'? 'black':'red' }} className="container my-5">
<Textform 
mode={mode}
alertAlert={alertAlert}
/>

</div>
</>
  )
}

export default App




































