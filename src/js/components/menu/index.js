import React from "react";

import Category from "./Category";
import Item from "./Item";

import { getMenuCategories, getCategoryItems, getItems } from "../../xhr";

let Menu = React.createClass({

  getInitialState() {
    return {
      categories: [],
      items: []
    }
  },

  componentDidMount() {
    getMenuCategories().then(response => {
      this.setState({
        categories: response.data
      });
    });

    getItems().then(response => {
      this.setState({
        items: response.data
      });
    });
  },

  render() {
    return (
      <div className="inner cover">
        {this.state.categories.map(category => {
          return (
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="bs-component">
                  <div className="panel panel-primary">
                    <div className="panel-heading">
                      <Category key={"category-" + category.id} name={category.name} />
                    </div>
                    <div className="panel-body">
                      <table className="table table-condensed table-striped">
                        <tbody>
                          {
                            this.state.items.filter(item => {
                              return (category.id == item.item_type.id)
                            }).map(item => {
                              return <Item key={"item-" + item.id} name={item.name} description={item.description} category_name={category.name} price={item.price} has_size={item.has_size} />
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
});

export default Menu
