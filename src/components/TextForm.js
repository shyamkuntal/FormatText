import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text is converted into Uppercase","sucess");
      }
      const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text is converted into Lowercase","sucess");
      }
      const handleOnChange = (event)=>{
        setText(event.target.value);
      }
      const handleClearClick = ()=>{
          let newText = ('');
          setText(newText)
      }

      const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copied","sucess");
      }

      const handleSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
      }

  return (
    <>
    <div className="container my-3" style = {{color: props.mode === 'dark'?'white':'#12193b'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control my-3" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode ===
           'dark'?'#0b0e17':'white',color: props.mode === 'dark'?'white':'#12193b'}} id="TextBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleSpace}>Remove Extra Spaces</button>
        <div className="container my-3" style = {{color: props.mode === 'dark'?'white':'#12193b'}}>
          <h1>Your Text Summary</h1>
          <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words {text.length} characters</p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes to Read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Nothing To Preview"}</p>
        </div>
    </div>
    </>
  )
}
