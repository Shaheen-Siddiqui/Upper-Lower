import React from 'react'
import {Link} from 'react-router-dom'

const Navbaar = ({mode,enableDarkMOde,alertAlert}) => {
  const toDanger=()=>{
    document.body.style.backgroundColor="red"
    alertAlert("Red mode will showing", "success")
  }
const toPrimary=()=>{
  document.body.style.backgroundColor="blue"
  alertAlert("Blue mode will showing", "success")

}
const tosuccess=()=>{
  document.body.style.backgroundColor="green"
  alertAlert("Green mode will showing", "success")


}
  return (
<div>
<nav class={`navbar navbar-${mode} bg-${mode} p-3`}>
<div class="form-check form-switch">
<input onClick={enableDarkMOde} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
</div>
<button className='btn btn-danger' onClick={toDanger}>RED ~Mode~</button>
<button className='btn btn-primary' onClick={toPrimary}>BLUE ~Mode~</button>
<button className='btn btn-success' onClick={tosuccess}>GREEN ~Mode~</button> 

</nav>
</div>
  )
}

export default Navbaar
