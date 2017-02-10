// Library
import React from "react";
import { Col, Thumbnail, Button } from "react-bootstrap";

export default class Category extends React.Component {
  render() {
    return (
      <Col md={4} sm={6}>
        <Thumbnail src={this.props.category.thumbnail}>
          <h3>{this.props.category.name}</h3>
          <p>
            <Button bsStyle="primary" href={"/category/" + this.props.category.id}>View Items</Button>
          </p>
        </Thumbnail>
      </Col>
    );
  }
}
