let React = require('react');
let { Image } = require('reactxp');

export default class ResizeImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dimension: null
    }
  }

  onLoad = (dim) => {
    this.setState({
      dimension: {
        width: dim.width,
        height: dim.height
      }
    });
  }

  render() {
    let { style, src, title } = this.props;
    let styles = [];
    if (this.state.dimension) {
      styles.push(this.state.dimension);
    }
    styles.push(style);

    return <Image style={styles} source={src} accessibilityLabel={title} onLoad={this.onLoad}/>;
  }
}
