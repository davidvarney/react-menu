import axios from "axios";

let getCategory = function(category_id) {
  return axios.get("http://104.131.53.79/item_types/" + category_id);
}

let getCategories = function() {
  return axios.get("http://104.131.53.79/item_types");
}

let getCategoryItems = function(category_id) {
  return axios.get("http://104.131.53.79/item_types/" + category_id + "/items");
}

let getItems = function() {
  return axios.get("http://104.131.53.79/items");
}

let getItem = function(item_id) {
  return axios.get("http://104.131.53.79/items/" + item_id);
}

let getSizes = function() {
  return axios.get("http://104.131.53.79/sizes");
}

let getExtras = function() {
  return axios.get("http://104.131.53.79/extras");
}

export { getCategory, getCategories, getCategoryItems, getItems, getItem, getSizes, getExtras }
