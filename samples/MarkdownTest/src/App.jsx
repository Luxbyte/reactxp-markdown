/*
 * This file demonstrates basic usage of the Markdown component
 */

let React, RX;
React = RX = require('reactxp');

let { Markdown } = require('reactxp-markdown');

const _styles = {
  container: RX.Styles.createViewStyle({
    flex: 1
  })
};

class App extends RX.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Markdown
        input="HEllo world"
      />
    );
  }
};

module.exports = App;
