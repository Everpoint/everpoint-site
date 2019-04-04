import React from "react";

import { Index } from "./Index/Index";
import { About } from "./About/About";
import { Portfolio } from "./Portfolio/Portfolio";
import { Jobs } from "./Jobs/Jobs";
import { Contacts } from "./Contacts/Contacts";

export const Section = React.memo(props => {
  const { id, titles } = props;

  const item = titles && titles.find(item => item.id === id);

  const mergedProps = {
    title: item ? item.title : "",
    ...props,
  };

  switch (id) {
    case "index":
      return <Index {...mergedProps} />;
    case "portfolio":
      return <Portfolio {...mergedProps} />;
    case "about":
      return <About {...mergedProps} />;
    case "jobs":
      return <Jobs {...mergedProps} />;
    case "contacts":
      return <Contacts {...mergedProps} />;
    default:
      return null;
  }
});
