var React = require('react');
var { Text } = require('reactxp');
import openUrl from './openUrl';

export default function renderInlineHtml(tag, node, parent, styles) {
  let children = [];
  let i = 0;
  while (i < parent[0].children.length) {
    let item = parent[0].children[i];
    if (item.tokenIndex > node.tokenIndex) {
      if (item.content != `</${tag}>`) {
        if (item.type == "softbreak") {
          children.push("\n");
        } else {
          children.push(item.content);
        }
        parent[0].children.splice(i, 1);
        i--;
      } else {
        break;
      }
    }
    i++;
  }
  switch (tag) {
    case "b":
    case "strong":
      return (
        <Text selectable={true} key={node.key} style={styles.strong}>
          {children}
        </Text>
      )
    case "i":
    case "em":
      return (
        <Text selectable={true} key={node.key} style={styles.em}>
          {children}
        </Text>
      )
    case "a":
      let href = node.content.match(/<a[^>]*href=["']([^"']*)["']/)[1].trim();
      return (
        <Text selectable={true} key={node.key} style={styles.link} onPress={() => openUrl(href)}>
          {children}
        </Text>
      )
    default:
      return (
        <Text selectable={true} key={node.key} style={styles.text}>
          {children}
        </Text>
      )
  }

}