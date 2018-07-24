const visit = require("unist-util-visit");

module.exports = md;

function md(options) {
  const { classnames } = options;

  const classMobile = `${classnames.description} ${classnames.mobile}`;

  const classDesktop = `${classnames.description} ${classnames.desktop}`;

  return function transformer(tree, file) {
    let headers;

    visit(tree, "tableRow", visitor);

    function visitor(node, index, parent) {
      if (node.type === "tableRow" && index === 0) {
        // thead
        headers = node.children.map(header => header.children[0].value);
      }

      // tbody rows
      if (index !== 0) {
        node.children[0].children = [
          {
            type: "div",
            children: headers.map(header => {
              return {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    value: header
                  }
                ]
              };
            }),
            data: {
              hProperties: {
                className: classnames.title
              }
            }
          },
          {
            type: "div",
            children: [
              {
                type: "paragraph",
                children: [
                  ...node.children[0].children,
                  {
                    type: "paragraph",
                    children: node.children[1].children,
                    data: {
                      hProperties: {
                        className: classMobile
                      }
                    }
                  }
                ]
              }
            ],
            data: {
              hProperties: {
                className: classnames.content
              }
            }
          }
        ];

        node.children[1] = {
          ...node.children[1],
          data: {
            hProperties: {
              className: classDesktop
            }
          }
        };
      }
    }
  };
}
