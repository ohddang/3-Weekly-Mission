import React from "react";
import ReactDOM from "react-dom";

// const appRoot = document.getElementById("app-root");
const modalRoot = document.getElementById("modal_root");

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    console.log("modal 생성");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
    console.log("modal child 추가");
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    console.log("modal child unmount");
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Modal;
