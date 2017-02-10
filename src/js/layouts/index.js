import React from "react";

// Layouts
import Header from "./Header";
import Footer from "./Footer";

let App = function(props) {
  return (
    <div>
      <Header route={props.location.pathname} />
      <div className="container">
        {props.children}
        <Footer />
      </div>
    </div>
  );
}

export default App;
