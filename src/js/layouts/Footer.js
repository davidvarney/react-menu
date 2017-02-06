import React from "react";

export default class Footer extends React.Component {
  render() {
    var year = new Date();
    return (
      <div class="mastfoot">
        <div class="inner">
          <p>&copy; {year.getFullYear()} - David Varney</p>
        </div>
      </div>
    );
  }
}
