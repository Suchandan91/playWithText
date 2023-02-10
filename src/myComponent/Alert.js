import React from "react";

export default function Alert(props) {
  return (
    <>
    <div className="popUp">
    {props.alert && <div className="alert alert-success alert-dismissible fade show text-center" role="alert">
            <strong>{props.alert.msg}</strong>
        </div>}
        </div>
        </>
  );
}
