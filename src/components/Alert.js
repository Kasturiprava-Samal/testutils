import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert- ${props.alert.type} alert-dismissible fade show`}
        role="alert"
        style={{
          backgroundColor: props.mode === "dark" ? "#5F9EA0" : "#9997A9",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
      </div>
    )
  );
}

export default Alert;
