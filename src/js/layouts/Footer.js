// Library
import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

export default class Footer extends React.Component {
  render() {
    var year = new Date();
    return (
      <footer>
        <Grid>
          <Row className="show-grid">
            <Col lg={10} lgOffset={1}>
              <p>&copy; {year.getFullYear()} - David Varney</p>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}
