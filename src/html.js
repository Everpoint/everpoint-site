import React from "react";

const pixelFacebook = `
 !function(f,b,e,v,n,t,s)
 {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
 n.callMethod.apply(n,arguments):n.queue.push(arguments)};
 if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
 n.queue=[];t=b.createElement(e);t.async=!0;
 t.src=v;s=b.getElementsByTagName(e)[0];
 s.parentNode.insertBefore(t,s)}(window, document,'script',
 'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '382699189214637');
 fbq('track', 'PageView');
`;

const pixelFacebookNoScript = `
   <img
      height="1"
      width="1"
      style="display:none"
      src="https://www.facebook.com/tr?id=382699189214637&ev=PageView&noscript=1"
    />
`;

const chatScript = `
  window.replainSettings = { id: '57be3428-0329-4555-ae31-8330e7e53ba0' };
    (function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src=u;
      var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
  })('https://widget.replain.cc/dist/client.js');
`;

const yandexMetrika = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(53290429, "init", {
       clickmap:true,
       trackLinks:true,
       accurateTrackBounce:true,
       webvisor:true
  });`;

const yandexMetrikaNoScript = `
  <div>
    <img
      src="https://mc.yandex.ru/watch/53290429"
      style="position:absolute; left:-9999px;"
      alt=""
    />
  </div>
`;

const googleMetrika = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-134915866-4');
`;

class HTML extends React.Component {
  render() {
    const {
      htmlAttributes,
      headComponents,
      bodyAttributes,
      preBodyComponents,
      postBodyComponents,
      body,
    } = this.props;

    return (
      <html {...htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          {headComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: pixelFacebook,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: pixelFacebookNoScript,
            }}
          />
        </head>

        <body {...bodyAttributes}>
          {preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: chatScript,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: yandexMetrika,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: yandexMetrikaNoScript,
            }}
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134915866-4" />
          <script
            dangerouslySetInnerHTML={{
              __html: googleMetrika,
            }}
          />
        </body>
      </html>
    );
  }
}

export default HTML;