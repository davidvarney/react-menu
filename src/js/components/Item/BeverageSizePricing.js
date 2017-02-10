// Library
import React from "react";
// XHR
import { getSizes } from "../../xhr";

let BeverageSizePricing = React.createClass({
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

  render() {
    return (
      <div>
        {
          this.state.sizes.map(size => {
            if (size.id % 2 > 0) {
              return (
                <span key={this.props.type + "-size-" + size.id}>
                  {size.name}&nbsp;&#36;{parseFloat(size.base_price).toFixed(2)}
                </span>
              );
            } else {
              return (
                <span key={this.props.type + "-size-" + size.id}>
                  &nbsp;|&nbsp;{size.name}&nbsp;&#36;{parseFloat(size.base_price).toFixed(2)}&nbsp;|&nbsp;
                </span>
              );
            }
          })
        }
      </div>
    );
  }
});

export default BeverageSizePricing
