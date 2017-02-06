import React from "react";

export default class Category extends React.Component {
  render() {
    return (
        <h3 className="panel-title">{this.props.name}</h3>
    );
  }
}
