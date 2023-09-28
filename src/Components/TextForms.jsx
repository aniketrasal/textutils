import { useState } from "react"

export const TextForms = (props)=>{
    const [text , setText] = useState("")
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been Uppercase","success")
    }

    const handleLwClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text has been Lowercase","success")
    }
    const handleClear = ()=>{
        setText("")
        props.showAlert("Dark mode has been Cleared","success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    return (
        <>
        <h2 className="mt-3" style={{backgroundColor: props.mode==="light"?"white":"#042743", color:props.mode==="light"?"black":"white"}}>Enter the Text </h2>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode==="light"?"white":"black", color:props.mode==="light"?"black":"white"}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <div className="container">
        <button type="button" className="btn btn-primary mx-2 m-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLwClick}>Convert to Lowercase</button>
        <button type="button" className="btn btn-danger mx-2" onClick={handleClear}>Clear</button>

        </div>
        <div className="container my-3" style={{backgroundColor: props.mode==="light"?"white":"#042743", color:props.mode==="light"?"black":"white"}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        
        </>
    )
}