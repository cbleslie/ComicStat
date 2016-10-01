import React from "react";
import { Cover } from "../cover/cover.jsx"
import { Title } from "../title/title.jsx"
import { Graph } from "../graph/graph.jsx"

var Main = React.createClass({
  render: function() {
    // console.log(this.props.data);
    var cover = this.props.data.cover,
        title = this.props.data.title,
        publisher = this.props.data.publisher
    return (
      <div data-main data-layout="main">
        <div data-area="cover">
          <div className="wrapper">
            <Cover cover={cover}/>
          </div>
        </div>
        <div data-area="info">
          <div className="wrapper">
            <Graph data={null}/>
            <Title title={title} publisher={publisher}/>
          </div>
        </div>
      </div>
    );
  }
});

export {
  Main
};
