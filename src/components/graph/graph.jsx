import React from "react";
var Bar = React.createClass({
  render: function() {
    var date = this.props.date,
        count = this.props.count,
        styles = {
          height: this.props.height + '%'
        },
        sold = "Sold: " + count;
    return (
      <div className="bar-container" data-value={date}>
        <div className="bar" data-value={sold} style={styles}></div>
      </div>
    );
  }
});

var Graph = React.createClass({
  render: function() {
    //Check to see if we have data, yet.
    if (this.props.data) {
      //get the object with the largest count
      var maxNum = this.props.data.reduce(
          function(prev, curr) {
            return prev.count > curr.count ? prev : curr;
          }
        ),
        //build graph bars
        barNodes = this.props.data.map(function(bar){
          var percentage = bar.count / maxNum.count * 100;
          return (
            <Bar
              key={bar.issue}
              date={bar.issue}
              count={bar.count}
              height={percentage}
              />
          )
        });
      return (
        <div data-graph>
          {barNodes}
        </div>
      );
    //No data yet?
    } else {
      return (
        <div data-graph>
          <div className="no-data">No Data</div>
        </div>
      )
    }
  }
});

export {
  Graph
};
