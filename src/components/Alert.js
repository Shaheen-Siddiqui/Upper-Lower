import React from 'react'

const Alert = ({alert}) => {

const capitlize=(word)=>{
  const str=word.toLowerCase();
   return str.charAt(0).toUpperCase()+str.slice(1)}

return (
alert && 
<>
<div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
<strong>{capitlize(alert.type)} :-  </strong>{alert.massage}
<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  </>

  )
}

export default Alert
