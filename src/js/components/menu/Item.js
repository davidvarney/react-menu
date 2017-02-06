import React from "react";
//import _ from "lodash";

import { getSizes } from "../../xhr";

let Item = React.createClass({

  getInitialState() {
    return {
      sizes: []
    }
  },

  componentDidMount() {
    console.log(this.props.price);
    getSizes().then(response => {
      this.setState({
        sizes: response.data
      });
    });
  },

  render() {
    //console.log(this.props.name, this.props.description);
    switch(this.props.category_name) {
      case "Combos":
        return (
          <tr>
            <td>&#35;{this.props.name}</td>
            <td className="item-description">{this.props.description}</td>
            <td>&#36;{parseFloat(this.props.price).toFixed(2)}</td>
            <td>
              {
                this.state.sizes.map(size => {
                  return (
                    <span className="menu-size" key={"combos-size-" + size.id}>{size.name} +&#36;{parseFloat(size.price).toFixed(2)}</span>
                  );
                })
              }
            </td>
          </tr>
        );
      case "Beverages":
        return (
          <tr>
            <td>{this.props.name}</td>
            <td>
              {
                this.state.sizes.map(size => {
                  return (<span className="menu-size" key={"beverages-size-" + size.id}>{size.name} +&#36;{parseFloat(size.price).toFixed(2)}</span>);
                })
              }
            </td>
          </tr>
        );
      default:
        return (
          <tr>
            <td>{this.props.name}</td>
            <td>&#36;{parseFloat(this.props.price).toFixed(2)}</td>
          </tr>
        );
    }
  }
});

export default Item
