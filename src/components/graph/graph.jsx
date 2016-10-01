import React from "react";
var Bar = React.createClass({

  render: function() {
    var date = this.props.date,
        count = this.props.count,
        styles = {
          height: this.props.height + '%'
        };
        console.log(count);
    return (
      <div className="bar-container" data-value={date}>
        <div className="bar" data-value={count} style={styles}></div>
      </div>
    );
  }
});

var Graph = React.createClass({
  render: function() {

    return (
      <div data-graph>
        <Bar height="100" date="12/16" count="200"/>
        <Bar height="100" date="12/16" count="200"/>
        <Bar height="100" date="12/16" count="200"/>
        <Bar height="100" date="12/16" count="200"/>
        <Bar height="100" date="12/16" count="200"/>
        <Bar height="100" date="12/16" count="200"/>
        <Bar height="100" date="12/16" count="200"/>
        <Bar height="100" date="12/16" count="200"/>
        <Bar height="100" date="12/16" count="200"/>
      </div>
    );
  }
});

export {
  Graph
};
