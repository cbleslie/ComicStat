import React from "react";
import marked from "marked";

var Comment = React.createClass({
  rawMarkup:  function() {
    var rawMarkup = marked(this.props.children.toString(), {
      sanitize: true
    });
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      <div data-comment>
      <h2 className="author">{this.props.author}</h2>
      <div className="comment" dangerouslySetInnerHTML={this.rawMarkup()}></div>
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>{comment.comment}</Comment>
      );
    });
    return (
      <div data-comment-list="">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div data-comment-form="">
        CommentForm
      </div>
    );
  }
});

var CommentBox = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount: function() {
    let request = new XMLHttpRequest();
    let self = this;
    request.open('GET', this.props.url+'.json', true);
    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        // Success!
        let resp = JSON.parse(this.response);
        console.log();
        self.setState({data: resp});
      } else {
        // We reached our target server, but it returned an error
        console.error(this.props.url, status, err.toString());
      }
    };
    request.onerror = function() {
      // There was a connection error of some sort
      console.error(this.props.url, status, err.toString());
    };
    request.send();
  },
  render: function() {
    return (
      <div data-comment-box>
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm/>
      </div>
    );
  }
});

export {
  CommentBox
};
