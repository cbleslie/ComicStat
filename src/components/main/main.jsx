import React from "react";
import { Cover } from "../cover/cover.jsx"
import { Title } from "../title/title.jsx"
import { Graph } from "../graph/graph.jsx"
import * as Axios from "axios"


var Main = React.createClass({

  getInitialState: function() {
    return {
      title: 'Not Avaliable',
      publisher: 'Unknown',
    }
  },

  componentDidMount: function() {
    var request = Axios
      .get(this.props.source)
      .then(function(result) {
        this.setState({
          data: result.data.records
        });
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
    this.setState({
      cover: this.props.cover,
      title: this.props.title,
      publisher: this.props.publisher,
    });
  },

  render: function() {
    return (
      <div data-main data-layout="main">
        <div data-area="cover">
          <div className="wrapper">
            <Cover cover={this.state.cover}/>
          </div>
        </div>
        <div data-area="info">
          <div className="wrapper">
            <Graph data={this.state.data}/>
            <Title title={this.state.title} publisher={this.state.publisher}/>
          </div>
        </div>
      </div>
    );
  }
});

export {
  Main
};
