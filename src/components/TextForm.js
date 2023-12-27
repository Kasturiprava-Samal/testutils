import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleloclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("text Clered", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const hanndleOnChange = (event) => {
    console.log("on change", event);
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");
  //setText("new text");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>{props.heading}</h3>
        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            onChange={hanndleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleloclick}>
          convert to lowercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
        className="container my-3"
      >
        <h3>Your text summary</h3>

        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h4>preview</h4>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
