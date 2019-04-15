import React from "react";

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

const chatScript = `
  window.replainSettings = { id: '57be3428-0329-4555-ae31-8330e7e53ba0' };
    (function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src=u;
      var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
  })('https://widget.replain.cc/dist/client.js');
`;

class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />;
    }

    return (
      <html {...this.props.htmlAttributes}>
        <head>
          {this.props.headComponents}
          {css}
        </head>

        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: chatScript,
            }}
          />
        </body>
      </html>
    );
  }
}

export default HTML;
