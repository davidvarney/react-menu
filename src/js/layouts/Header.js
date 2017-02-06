import React from "react";
import { Link } from "react-router";

let Header = React.createClass({
  getInitialState() {
    return {
      menu_nav_active: "",
      order_nav_active: "active"
    }
  },

  componentDidMount() {

  },

  render() {

    return (
      <div className="masthead clearfix">
        <div className="inner">
          <h3 className="masthead-brand">React Menu</h3>
          <nav>
            <ul className="nav masthead-nav">
              <li className={this.state.menu_nav_active} onClick={this.toggleMenuActive}><Link to={'/menu'} >Menu</Link></li>
              <li className={this.state.order_nav_active} onClick={this.toggleOrderActive}><Link to={'/'}>Order</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  },

  toggleOrderActive() {
    this.setState({
      menu_nav_active: "",
      order_nav_active: "active"
    });
  },

  toggleMenuActive() {
    this.setState({
      menu_nav_active: "active",
      order_nav_active: ""
    });
  }
});

export default Header
