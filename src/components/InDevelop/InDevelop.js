import React from "react";

import { GatsbyLink } from "../../components/Atoms/Atoms";

export const InDevelop = ({ to }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src="http://odkb76.ru/pic/userfile/images/razrabotka.png" alt="in developing" />
      <GatsbyLink style={{ marginTop: "1rem", color: "#90c53d" }} to={to} replace>
        Вернутся назад
      </GatsbyLink>
    </div>
  );
};
