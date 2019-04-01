import React from "react";

import { GoNextLink } from "../../../components/GoNextLink/GoNextLink";
import { HorizontalRule } from "../../../components/Typography/HorizontalRule";
import { BigH1 } from "../../../components/Typography/Headlines";
import { Section } from "./styles";

export const Index = ({ onRef }) => (
  <Section ref={onRef}>
    <HorizontalRule />
    <BigH1>
      Геосервисы для <br /> принятия решений
    </BigH1>
    <GoNextLink to="/company" gatsby big>
      О компании
    </GoNextLink>
  </Section>
);
