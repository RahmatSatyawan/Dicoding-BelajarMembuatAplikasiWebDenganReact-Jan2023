import React, { Component } from "react";

export class ButtonDelete extends Component {
  render() {

    const link = this.props.link;
    
    return (
      <div>
        <button><a href={link}>Delete</a></button>
      </div>
    );
  }
}

export default ButtonDelete;
