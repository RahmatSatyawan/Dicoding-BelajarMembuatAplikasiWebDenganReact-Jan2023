import React, { Component } from "react";

export class ButtonMove extends Component {
  render() {
    const link = this.props.link;
    return (
      <div>
        <button>
          <a href={link}>Pindahkan</a>
        </button>
      </div>
    );
  }
}

export default ButtonMove;
