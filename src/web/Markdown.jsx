/*
* Markdown.jsx
* Copyright (c) Luxbyte SARLS. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform abstraction for the Markdown component
*/

let React = require('react');
let ReactDOM = require('react-dom');
let RX = require('reactxp');
let ReactMarkdown = require('react-markdown');

class Markdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Markdown
        source={this.props.input}
      />
    );
  }
}

module.exports = Markdown;
