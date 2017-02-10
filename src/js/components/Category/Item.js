// Library
import React from "react";
import { Link } from "react-router";

export default class Item extends React.Component {
  getLinkUrl() {
    return "/category/" + this.props.item.item_type.id + "/item/" + this.props.item.id;
  }

  render() {
    switch(this.props.item.item_type.name) {
      case "Combos":
        return (
          <tr>
            <td><Link to={this.getLinkUrl()}>&#35;{this.props.item.name}</Link></td>
            <td className="item-description"><Link to={this.getLinkUrl()}>{this.props.item.description}</Link></td>
            <td><Link to={this.getLinkUrl()}>&#36;{parseFloat(this.props.item.price).toFixed(2)}</Link></td>
          </tr>
        );
      case "Beverages":
        return (
          <tr>
            <td><Link to={this.getLinkUrl()}>{this.props.item.name}</Link></td>
          </tr>
        );
      default:
        return (
          <tr>
            <td><Link to={this.getLinkUrl()}>{this.props.item.name}</Link></td>
            <td><Link to={this.getLinkUrl()}>&#36;{parseFloat(this.props.item.price).toFixed(2)}</Link></td>
          </tr>
        );
    }
  }
}
