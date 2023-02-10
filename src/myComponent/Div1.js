import React ,{useState} from 'react'

export default function Div1(props) {

  //coping the text of clipboard
  function copyText() {
    // Getting the text field
    let cText = document.getElementById("finalText");
     // Copy the text inside the text field
     cText.select();
    navigator.clipboard.writeText(cText.value);
    props.showAlert("Copied to clipboard successfully")
  }

  //using use state hook
  const [text, setText]= useState("");
//* calling onchange function to get the text of text area
  const textHandle=(event)=>{
    setText(event.target.value);
  }
//*calling "upperCase" function when clicked on uppercase button
  const upperCase=()=> {
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase")
  }
//*calling "lowerCase" function when clicked on lowercase button
  const lowerCase=()=>{
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase")
  }
//*calling "capitalizeEachWord" function when clicked on Capitalize Each Word button
const capitalizeEachWord=()=>{ 
  const sarr=text.split(".");
    //initializing each word of text to array named arr by split() function
const arr = sarr.join(". ").split(/[ ]+/);
for (let i = 0; i < arr.length; i++) {
    //arr[i].charAt(0).toUpperCase() in this piece of code every first charachter of each word capitalized
    //arr[i].slice(1).toLowerCase() in this piece of code remaining charecters of the word is Converted to lowercase and then added with "+" operator
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
  }
let newText = arr.join(" ");
setText(newText);
props.showAlert("Each word are Capitalized")
}
//* calling "sentenceCase" function when clicked on Sentence case button
const sentenceCase=()=>{
      // as same as "capitalizeEachWord" function only change is splitting by "."(fullstop) instead of space
  const barr = text.split(".");
  for (let i = 0; i < barr.length; i++) {
    barr[i] = barr[i].trim();
  barr[i] = barr[i].charAt(0).toUpperCase() + barr[i].slice(1).toLowerCase();
  }
  let newText = barr.join(". ");
  setText(newText)
  props.showAlert("Converted to Sentencecase")
}
//* calling "toogleCase" function when clicked on toogle case button
const toogleCase=()=>{
  const sarr=text.split(".");//this line of code is made for a alphabet which is jast next of "."(example:".a" or ".b") this function convert (".a") into (". a") either way toogle case will not count the wordstarting with "." like (".good")
const carr = sarr.join(". ").split(/[ ]+/);
for (let i = 0; i < carr.length; i++) {
  carr[i] = carr[i].charAt(0).toLowerCase() + carr[i].slice(1).toUpperCase();
}
let newText = carr.join(" ");
setText(newText);
props.showAlert("Converted to Tooglecase")
}
//* calling "sapacingCorrection" function when clicked on Spacing correction button
const spacingCorrection=()=>{
  let sarr= text.split(".");
  const carr = sarr.join(". ").split(/[ ]+/);
  let newText = carr.join(" ").trim();
  setText(newText);
  props.showAlert("All the extra spaces are cleared")
  }
//* calling "clearAll" function when clicked on clear all button
const clearAll=()=>{
  setText("");
  props.showAlert("Textarea has been cleared")
  }
//  this is character counter where text.length is the lenght of user input and (text.split(" ").length -1) this is space counter
  let charecterCount= text.length - (text.split(" ").length -1);
// this is word counter, the ternery statement is for the default value of wordCount to be 0 instead of 1
  let wordCount = (text!==""?text.trim().split(" ").length:0)
// this is Sentence counter
  let sentenceCount = (text!==""?text.trim().split(". ").length:0);
  
  return (
    <>
    <div className= "bg-div my-5">
        <button disabled={text.length===0} type="button" id="button" className='btn btn-dark' onClick={copyText} >copy</button>
          <textarea className="inputtext my-3" id = "finalText" value={text} onChange={textHandle} placeholder="enter your text here" rows="8"></textarea>
        <div id="btndiv" className="btn d-flex justify-content-center gap-2 btn-outline-light">
        <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={sentenceCase}>Sentence case</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={upperCase}>UPPERCASE</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={lowerCase}>lowercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={capitalizeEachWord}>Capitalise Each Word</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={toogleCase}>tOOGLE cASE</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={spacingCorrection}>Spacing correction</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={clearAll}>Clear all</button>
        </div>
        <div className="counter d-flex">
        <h6 className="mx-2"> WORDS: <span>{wordCount}</span></h6> 
        <h6 className="mx-2"> CHARECTERS: <span>{ charecterCount}</span></h6>
        <h6 className="mx-2"> SENTENCES: <span>{ sentenceCount}</span></h6>
        </div>
    </div>
        
    <div className="previewText container d-flex flex-column border-box">
        
          <h3 className="mx-5">PREVIEW:</h3>
          <pre className="mx-5 d-block" >{(text===""?"(Preview Text Will Appear Here)":text)}</pre>
    </div>
    <div className="container note">
          <p className='note'> note*: as this app is running on github so routing will not work so "home" and "about" button will also not work. njoy playing with text</p>
    </div>
        
    </>
  )
}
