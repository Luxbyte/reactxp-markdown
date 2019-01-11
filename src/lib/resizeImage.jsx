let React = require('react');
let { Image } = require('reactxp');

export default class ResizeImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dimension: null
    }
    this._isMounted = false;
  }

  componentDidMount = () => {
    let self = this;
    this._isMounted = true;
    Image.getMetadata(this.props.src).then(function(data) {
      if (self._isMounted) {
        self.setState({
          dimension: {
            width: data.width,
            height: data.height
          }
        });
      }
    })
  }

  componentWillUnmount = () => {
    this._isMounted = false;
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
