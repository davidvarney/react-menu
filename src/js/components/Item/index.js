// Library
import React from "react";
import { Grid, Row, Col, Thumbnail, Table } from "react-bootstrap";
// Components
import BeverageSizePricing from "./BeverageSizePricing";
// Layouts
import Breadcrumbs from "../../layouts/Breadcrumbs";
// XHR
import { getItem, getCategory } from "../../xhr";

let Item = React.createClass({

  getInitialState() {
    return {
      item: [],
      category: []
    }
  },

  componentDidMount() {
    getItem(this.props.params.itemId).then(response => {
      this.setState({
        item: response.data
      });
    });
    getCategory(this.props.params.categoryId).then(response => {
      this.setState({
        category: response.data
      });
    });
  },

  getPricing() {
    switch(this.state.category.name) {
      case "Beverages":
        return (
          <BeverageSizePricing />
        );
      default:
        return (
          <div>
            &#36;{parseFloat(this.state.item.price).toFixed(2)}
          </div>
        );
    }
  },

  render() {
    return (
      <div>
        <Breadcrumbs params={this.props.params} />
        <Grid>
          <Row>
            <Col lg={8} lgOffset={2}>
              <Thumbnail src={this.state.item.index_image}>
                <Row>
                  <Col lg={6} lgOffset={3}>
                    <h3>{this.state.item.name}</h3>
                    <Table>
                      <tbody>
                        <tr>
                          <td>{this.state.item.description}</td>
                          <td>{this.getPricing()}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

export default Item
