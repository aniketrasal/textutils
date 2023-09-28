import React from "react";

export default function Alert(props) {
    const convertCapital = (word)=>{
        return word = word.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
    props.alert && <div>
      <div className={`alert alert-${props.alert.type}`} role="alert">
      {convertCapital(props.alert.type)}  {props.alert.msg}
      </div>
    </div>
  );
}