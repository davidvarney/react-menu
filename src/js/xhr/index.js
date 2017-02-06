import axios from "axios";

let postOrder = function(data) {
  return axios.post("http://104.131.53.79/orders", data)
    .then(function(response) {
      console.log(response.data);
      console.log(response.status);
    });
}

let getMenuCategories = function() {
  return axios.get("http://104.131.53.79/item_types");
}

let getOrderItemsForOrder = function(order_id) {
  return axios.get("http://104.131.53.79/order_items_by_order_id/" + order_id)
    .then(function(response) {
      console.log(response.data);
      console.log(response.status);
    });
}

let getCategoryItems = function(category_id) {
  return axios.get("http://104.131.53.79/item_types/" + category_id + "/items");
}

let getItems = function() {
  return axios.get("http://104.131.53.79/items");
}

let getSizes = function() {
  return axios.get("http://104.131.53.79/sizes");
}

export { getMenuCategories, postOrder, getOrderItemsForOrder, getCategoryItems, getItems, getSizes }
