let React = require('react');
let { Image } = require('reactxp');

export default class ResizeImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dimension: null
    }
  }

  componentDidMount = () => {
    let self = this;
    Image.getMetadata(this.props.src).then(function(data) {
      self.setState({
        dimension: {
          width: data.width,
          height: data.height
        }
      });
    })
  }

  render() {
    let { style, src, title } = this.props;

    if (this.state.dimension) {
      let styles = [style];
      if (this.state.dimension) {
        styles.push(this.state.dimension);
      }
      return <Image style={styles} source={this.props.src} accessibilityLabel={title}/>;
    }
    return null;
  }
}
