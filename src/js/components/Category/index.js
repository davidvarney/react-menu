// Library
import React from "react";
import { Grid, Col, Button, Panel, Thumbnail, Table } from "react-bootstrap";
// Layouts
import Breadcrumbs from "../../layouts/Breadcrumbs";
// Components
import Item from "./Item";
import Sizes from "./Sizes";
// XHR
import { getCategoryItems, getCategory } from "../../xhr";

let Menu = React.createClass({

  getInitialState() {
    return {
      category: [],
      items: []
    }
  },

  componentDidMount() {
    getCategoryItems(this.props.params.categoryId).then(response => {
      this.setState({
        items: response.data
      });
    });
    getCategory(this.props.params.categoryId).then(response => {
      this.setState({
        category: response.data
      });
    });
  },

  getPricingFooter() {
    switch(this.state.category.name) {
      case "Combos":
        return (
          <tfoot>
            <tr>
                <Sizes type={this.state.category.name} colSpan="3"/>
            </tr>
          </tfoot>
        );
      case "Beverages":
        return (
          <tfoot>
            <tr>
                <Sizes type={this.state.category.name} colSpan="1"/>
            </tr>
          </tfoot>
        );
      default:
        return ;
    }
  },

  render() {
    const category_panel_title = (
      <h3>{this.state.category.name}</h3>
    );
    return (
      <div>
        <Breadcrumbs params={this.props.params} />
        <Grid>
          <Col lg={10} lgOffset={1}>
            <Panel header={category_panel_title}>
              <Col lg={6}>
                <Thumbnail href="#" src={this.state.category.index_image} />
              </Col>
              <Col lg={6}>
                <Table>
                  <tbody>
                    {
                      this.state.items.map(item => {
                        return (
                          <Item key={"category-page-table-item-" + item.id} item={item} />
                        );
                      })
                    }
                  </tbody>
                  {this.getPricingFooter()}
                </Table>
              </Col>
            </Panel>
          </Col>
        </Grid>
      </div>
    );
  }
});

export default Menu
