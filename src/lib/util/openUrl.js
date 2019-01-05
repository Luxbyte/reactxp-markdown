var { Linking } = require('reactxp');

export default function openUrl(url) {
  if (url) {
    Linking.openUrl(url);
  }
}
