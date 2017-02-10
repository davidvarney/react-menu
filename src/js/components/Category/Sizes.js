// Library
import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
// XHR
import { getSizes } from "../../xhr";

let Item = React.createClass({

  getInitialState() {
    return {
      sizes: []
    }
  },

  componentDidMount() {
    getSizes().then(response => {
      this.setState({
        sizes: response.data
      });
    });
  },

  getCorrectPrice(size_obj, type) {
    switch(type) {
      case "Beverages":
        return size_obj.base_price;
      case "Combos":
        return size_obj.combo_price
    }
  },

  render() {
    return (
      <td colSpan={this.props.colSpan}>
        {
          this.state.sizes.map(size => {
            if (size.id % 2 > 0) {
              return (
                <span key={this.props.type + "-size-" + size.id}>
                  {size.name}&nbsp;&#36;{parseFloat(this.getCorrectPrice(size, this.props.type)).toFixed(2)}
                </span>
              );
            } else {
              return (
                <span key={this.props.type + "-size-" + size.id}>
                  &nbsp;|&nbsp;{size.name}&nbsp;&#36;{parseFloat(this.getCorrectPrice(size, this.props.type)).toFixed(2)}&nbsp;|&nbsp;
                </span>
              );
            }
          })
        }
      </td>
    );
  }
});

export default Item
