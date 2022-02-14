import React from 'react'

const Navbaar = ({mode,enableDarkMOde}) => {
  return (
<div>
<nav class={`navbar navbar-${mode} bg-${mode} p-3`}>
<div class="form-check form-switch">
<input onClick={enableDarkMOde} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
</div>
</nav>
</div>
  )
}

export default Navbaar
