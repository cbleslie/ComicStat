import React from "react";

var Title = React.createClass({
  render: function() {
    var prop = this.props;
    return (
      <div data-title>
        <strong className="title">{prop.title}</strong> <small className="publisher">({prop.publisher})</small>
      </div>
    );
  }
});

export {
  Title
};
