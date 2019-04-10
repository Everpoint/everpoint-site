import React from "react";
import PropTypes from "prop-types";

import VacancyLongread from "../../templates/vacancy";
import { PreviewContainer } from "../../components/CmsPreviewContainer/CmsPreviewContainer";

const VacancyLongreadPreview = ({ entry, widgetFor }) => (
  <PreviewContainer>
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
