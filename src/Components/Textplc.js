import React, { useState } from "react";


export default function Textarea(props) {
  const [text, settext] = useState("");

  const toggleupclick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert('Converted to uppercase', 'success')
  };

  const toggledownclick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert('Converted to lowercase', 'success')
  };

  const toggleonchange = (event) => {
    settext(event.target.value);
  };

  const handlecopyClick = () => {
    var text = document.getElementById("floatingTextarea2");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('text copied', 'success');
  };
  const handleremovespacesClick = () => {
    let newtext = text.replace(/\s+/g, " ");
    settext(newtext);
    props.showAlert('spaces remove', 'success');
  };

  const handlebackClick = () => {
    let newtext = text.slice(0, -1);
    settext(newtext);
  };

  const handleresetClick = () => {
    let newtext = "";
    settext(newtext);
    props.showAlert('text reset', 'success')
  };

  return (
    <>
      <div classname="container">
        <h1 className="text-center" style={{color: props.mode === "light" ? "black" : "white"}}>{props.heading}</h1>
        <div className="row justify-content-evenly">
          <div className="col-8">
            <div className="form-floating">
              <textarea
                className="form-control"
                
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: 300,
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white", }}
                defaultValue={""}
                onChange={toggleonchange}
                value={text}
              />
              <label className="" htmlFor="floatingTextarea2">
                Enter the text here
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-4 mb-4">
        <div className="row justify-content-evenly">
          <div className="col-md-8">
            <button className="btn btn-primary mx-1" onClick={toggleupclick}>
              uppercase
            </button>
            <button className="btn btn-primary mx-1" onClick={toggledownclick}>
              lowercase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleresetClick}>
              reset
            </button>
            <button className="btn btn-primary mx-2" onClick={handlebackClick}>
              back
            </button>
            <button className="btn btn-primary mx-2" onClick={handlecopyClick}>
              Copy
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={handleremovespacesClick}
            >
              remove spaces
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{color: props.mode === "light" ? "black" : "white"}}>
        <h1>Your Text Summary</h1>
        <p>
          {" "}
          {text.length} characters and {text.split(" ").length} words
        </p>
        <p>
          you can read this paragraph in {0.008 * text.split(" ").length}{" "}
          minutes
        </p>
      </div>
    </>
  );
}
