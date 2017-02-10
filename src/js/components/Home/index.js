// Library
import React from "react";
import { Grid } from "react-bootstrap";
// Layouts
import Breadcrumbs from "../../layouts/Breadcrumbs";
// Components
import Category from "./Category";
// XHR
import { getCategories } from "../../xhr";

let Home = React.createClass({

  getInitialState() {
    return {
      categories: []
    }
  },

  componentDidMount() {
    getCategories().then(response => {
      this.setState({
        categories: response.data
      });
    });
  },

  render() {
    return (
      <div>
        <Breadcrumbs params={this.props.params} />
        <Grid>
          {
            this.state.categories.map(category => {
              return (
                <Category key={"category-thumbnails-" + category.id} category={category} />
              );
            })
          }
        </Grid>
      </div>
    );
  }
});

export default Home
