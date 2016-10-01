import React from "react";

var NoCover = React.createClass({
  render: function() {
    return (
      <div className="no-cover">
        N/A
      </div>
    );
  }
});

var Cover = React.createClass({
  render: function() {
    var prop = this.props,
        coverURL = '',
        noCover = null;

    //Check for Cover Url
    if (prop.cover) {
      coverURL = "url(" + prop.cover + ")";
    } else {
      noCover = <NoCover/>;
    }

    var style = {
      backgroundImage: coverURL
    };

    return (
      <div data-cover style={style}>
        {noCover}
      </div>
    );
  }
});

export {
  Cover
};
