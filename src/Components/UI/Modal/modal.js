import React, { Component } from "react";
import "./modal.css";
import Backdrop from "../Backdrop/backdrop";
import Spinner from "../Spinner/Spinner";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    let load = this.props.show ? (<div>
      <Backdrop show={this.props.show}></Backdrop>
      <div
        className="Modal"
        style={{
          transform: "translateY(0)",
          opacity: "1",
        }}
      >
        <Spinner />
        <p>Loading</p>
      </div>
    </div>) : null;
    return <div>{load}</div>;
  }
}

export default Modal;
