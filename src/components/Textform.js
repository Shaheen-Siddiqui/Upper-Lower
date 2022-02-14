import React, { useState } from 'react'

const Textform = (props) => {
    let [text,setText]=useState('');

    const texteriaval=(event)=>{
        setText(event.target.value)
    }
    const updateText=()=>{
       const manuplateToUpperCase= text.toUpperCase()
        setText(manuplateToUpperCase)
    }
    const lowdatedata=()=>{
        const namuplateToLowerCase=text.toLocaleLowerCase()
        setText(namuplateToLowerCase)
    }

return (
<div>
<h4>{props.middle}</h4>
<div className="mb-3">
<textarea className="form-control" placeholder='Enter Text for ManUpLaTiOn' value={text} id="Empaty Box" rows="7" cols="90" onChange={texteriaval}></textarea>
<section className='outersec'>
<button className="btn btn-primary my-4" onClick={updateText}>Convert to upperCase</button>
<button className="btn btn-danger" onClick={lowdatedata}>Convert to Lowercase</button>
</section>
</div>

        </div>
    )
}

export default Textform

Textform.defaultProps={
middle:"Change Taxt-to:-"
}
