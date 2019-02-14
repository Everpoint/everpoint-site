import React from "react";
import ReactHelmet from "react-helmet";

import ogImage from "../../assets/img/assets/ogImage.png";
import favicon from "../../assets/img/assets/favicon.png";

export const Helmet = props => {
  return (
    <ReactHelmet
      title="Everpoint"
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
      meta={[
        { name: "title", content: "Everpoint" },
        {
          name: "viewport",
          content:
            "width=device-width, height=device-height, initial-scale=1.0, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover",
        },
        {
          name: "keywords",
          content: "GIS, LOCATION INTELLIGENCE, MAPS, DATA ANALYTICS, DATA VISUALIZATION",
        },
        { name: "description", content: "Разработчик геоинформационных систем и сервисов." },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { property: "og:title", content: "Everpoint" },
        { property: "twitter:title", content: "Everpoint" },
        { property: "og:url", content: "http://everpoint.ru" },
        { property: "og:image", content: ogImage },
        { name: "twitter:image:src", contet: ogImage },
        { property: "og:description", content: "Разработчик геоинформационных систем и сервисов." },
        { property: "og:type", contet: "website" },
        { property: "og:site_name", contet: "Everpoint" },
        {
          name: "twitter:description",
          content: "Разработчик геоинформационных систем и сервисов.",
        },
      ]}
      {...props}
    />
  );
};
