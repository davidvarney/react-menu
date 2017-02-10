// Library
import React from "react";
import { Grid, Row, Col, Breadcrumb } from "react-bootstrap";
import $ from "jquery";
import _ from "lodash";
// XHR
import { getCategory, getItem } from "../xhr";

let Breadcrumbs = React.createClass({
  getInitialState() {
    return {
      category: [],
      item: []
    }
  },

  componentDidMount() {
    if (!$.isEmptyObject(this.props.params) && _.has(this.props.params, "categoryId")) {
      getCategory(this.props.params.categoryId).then(response => {
        this.setState({
          category: response.data
        });
      });
    }

    if (!$.isEmptyObject(this.props.params) && _.has(this.props.params, "itemId")) {
      getItem(this.props.params.itemId).then(response => {
        this.setState({
          item: response.data
        });
      });
    }
  },

  getBreadcrumbItemUrl(paramName) {
    switch(paramName) {
      case "categoryId":
        return "/category/" + this.props.params.categoryId;
      case "itemId":
        return "/category/" + this.props.params.categoryId + "/item/" + this.props.params.itemId;
    }
  },

  getBreadcrumb(paramName) {
    var breadcrumbName = "";
    switch(paramName) {
      case "categoryId":
        breadcrumbName = this.state.category.name;
        break;
      case "itemId":
        breadcrumbName = this.state.item.name;
        break;
    }
    return (
      <Breadcrumb.Item href={this.getBreadcrumbItemUrl(paramName)}>
        {breadcrumbName}
      </Breadcrumb.Item>
    );
  },

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={10} lgOffset={1}>
            <Breadcrumb>
              <Breadcrumb.Item href="/">
                Home
              </Breadcrumb.Item>
              { (_.has(this.props.params, "categoryId")) ? this.getBreadcrumb("categoryId") : ""}
              { (_.has(this.props.params, "itemId")) ? this.getBreadcrumb("itemId") : ""}
            </Breadcrumb>
          </Col>
        </Row>
      </Grid>
    );
  }
});

export default Breadcrumbs
