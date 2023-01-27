import React, { Component } from "react";

export class ButtonArchive extends Component {
  render() {
    const link = this.props.link;
    return (
      <div>
        <button>
          <a href={link}>Arsipkan</a>
        </button>
      </div>
    );
  }
}

export default ButtonArchive;
