import React from "react";

// Layouts
import Header from "./Header";
import Footer from "./Footer";

let App = function(props) {
  return (
    <div className="site-wrapper-inner">
      <div className="cover-container">
        <Header route={props.location.pathname} />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}

export default App;
