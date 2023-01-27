import React, { Component } from "react";

export class HeaderPage extends Component {
  render() {
    const searchTitle = this.props.searchTitle;
    const onSearch = this.props.onSearchHandler;

    return (
      <header>
        <h1>Notes</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTitle}
            onChange={onSearch}
          ></input>
        </div>
      </header>
    );
  }
}

export default HeaderPage;
