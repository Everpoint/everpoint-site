import React from "react";
import PropTypes from "prop-types";
import ReactHelmet from "react-helmet";

import VacancyLongread from "../../templates/vacancy";
import { PreviewContainer } from "../../components/CmsPreviewContainer/CmsPreviewContainer";
import styles from "../../styles/longread";

const VacancyLongreadPreview = ({ entry, widgetFor }) => (
  <PreviewContainer scrollable>
    <ReactHelmet
      htmlAttributes={{
        class: styles.longreadHtml,
      }}
      bodyAttributes={{
        class: styles.longreadBody,
      }}
    />
    <VacancyLongread />
    {/*<Row>*/}
    {/*  <NewsContainer>*/}
    {/*    <News*/}
    {/*      title={entry.getIn(["data", "title"])}*/}
    {/*      date={entry.getIn(["data", "date"])}*/}
    {/*      description={entry.getIn(["data", "description"])}*/}
    {/*      link={entry.getIn(["data", "link"])}*/}
    {/*      logo={entry.getIn(["data", "logo"])}*/}
    {/*    />*/}
    {/*  </NewsContainer>*/}
    {/*</Row>*/}
    {/*<Row style={{ backgroundColor: "#fff", marginTop: "auto" }}>*/}
    {/*  <Article*/}
    {/*    title={entry.getIn(["data", "title"])}*/}
    {/*    date={format(entry.getIn(["data", "date"]))}*/}
    {/*    description={entry.getIn(["data", "description"])}*/}
    {/*    link={entry.getIn(["data", "link"])}*/}
    {/*    logo={entry.getIn(["data", "logo"])}*/}
    {/*  />*/}
    {/*</Row>*/}
  </PreviewContainer>
);

VacancyLongreadPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default VacancyLongreadPreview;
