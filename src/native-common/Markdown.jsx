/*
* Markdown.jsx
* Copyright (c) Luxbyte SARLS. All rights reserved.
* Licensed under the MIT license.
*
* Native-specific implementation of the cross-platform abstraction for the Markdown component
*/

let React = require('react');
let ReactDOM = require('react-dom');
let RX = require('reactxp');
let ReactMarkdown = require('react-native-markdown-renderer');

class Markdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Markdown>{this.props.input}</Markdown>
    );
  }
}

module.exports = Markdown;
