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

const copy = `# h1 Heading 8-)

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
`;

class App extends RX.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RX.View style={_styles.container}>
        <Markdown
          input={copy}
        />
      </RX.View>
    );
  }
};

module.exports = App;
