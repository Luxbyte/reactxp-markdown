var { Platform } = require('reactxp');
import PlatformEnum from './data/PlatformEnum';

/**
 *
 */
export const styles = {
  root: {},
  view: {},
  codeBlock: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 4,
    fontFamily: 'Courier'
  },
  codeInline: {
    backgroundColor: '#f3f4f4',
    borderRadius: 4,
    padding: 2,
    fontFamily: 'Courier'
  },
  del: {
    backgroundColor: '#000000',
  },
  em: {
    fontStyle: 'italic',
  },
  headingContainer: {
    flexDirection: 'row',
  },
  heading: {},
  heading1: {
    fontSize: 32,
  },
  heading2: {
    fontSize: 24,
  },
  heading3: {
    fontSize: 18,
  },
  heading4: {
    fontSize: 16,
  },
  heading5: {
    fontSize: 13,
  },
  heading6: {
    fontSize: 11,
  },
  hr: {
    backgroundColor: '#000000',
    height: 1,
  },
  blockquote: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 20,
    backgroundColor: '#CCCCCC',
  },
  inlineCode: {
    borderRadius: 3,
    borderWidth: 1,
    fontFamily: 'Courier',
    fontWeight: 'bold',
  },
  list: {},
  listItem: {
    flex: 1,
    flexWrap: 'wrap',
    // backgroundColor: 'green',
  },
  listUnordered: {},

  listUnorderedItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  listUnorderedItemIcon: {
    marginLeft: 10,
    marginRight: 10,
    top: 0,
    ...Platform.select({
      [PlatformEnum.IOS]: {
        lineHeight: 36,
        height: 36
      },
      [PlatformEnum.ANDROID]: {
        lineHeight: 30,
        height: 30
      },
      [PlatformEnum.WEB]: {
        lineHeight: "38px",
        height: 38
      },
    }),
  },
  listUnorderedItemText: {
    fontSize: 20,
    lineHeight: 20
  },

  listOrdered: {},
  listOrderedItem: {
    flexDirection: 'row',
  },
  listOrderedItemIcon: {
    marginLeft: 10,
    marginRight: 10,
    ...Platform.select({
      [PlatformEnum.IOS]: {
        lineHeight: 36,
        height: 36
      },
      [PlatformEnum.ANDROID]: {
        lineHeight: 30,
        height: 30,
      },
      [PlatformEnum.WEB]: {
        lineHeight: "38px",
        height: 38
      },
    }),
  },
  listOrderedItemText: {
    fontWeight: 'bold',
    lineHeight: 20
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  hardbreak: {
    width: '100%',
    height: 1,
  },
  strong: {
    fontWeight: 'bold',
  },
  table: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 3,
  },
  tableHeader: {},
  tableHeaderCell: {
    flex: 1,
    // color: '#000000',
    padding: 5,
    // backgroundColor: 'green',
  },
  tableRow: {
    borderBottomWidth: 1,
    borderColor: '#000000',
    flexDirection: 'row',
  },
  tableRowCell: {
    flex: 1,
    padding: 5,
  },
  text: {},
  strikethrough: {
    textDecorationLine: 'line-through',
  },
  link: {
    textDecorationLine: 'underline',
  },
  blocklink: {
    flex: 1,
    borderColor: '#000000',
    borderBottomWidth: 1,

  },
  u: {
    borderColor: '#000000',
    borderBottomWidth: 1,
  },
  image: {
    maxWidth: '100%'
  },
  webView: {
    height: 150,
    overflow: 'hidden'
  }
};
