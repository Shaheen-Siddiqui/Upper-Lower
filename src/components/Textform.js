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
    const alearall=()=>{
        setText("")   
    }
    

return (
<div>
<h4>{props.middle}</h4>
<div className="mb-3">
<textarea className="form-control" placeholder='Enter Text for ManUpLaTiOn' value={text} id="Empaty Box" rows="7" cols="90" onChange={texteriaval} onFocus></textarea>
    <p className='my-3 abs'>words are:- <span style={{color:"blue"}}> {text.split(" ").length}</span> letters are:- <span style={{color:"blue"}}>{text.length} </span> </p>
    <p className='abs'>Reading time:- <span style={{color:"blue"}}>{0.008*text.split(" ").length}</span> </p>
    <h3>Previwe</h3>
    <p> {text} </p>
<section className='outersec'>
<button className="btn btn-primary my-2" onClick={updateText}>Convert to upperCase</button>
<button className="btn btn-danger my-1" onClick={lowdatedata}>Convert to Lowercase</button>
<button className='btn btn-dark my-2' onClick={alearall}>clear all</button>
</section>
</div>

        </div>
    )
}
export default Textform

Textform.defaultProps={
middle:"Change Taxt-to:-"
}
