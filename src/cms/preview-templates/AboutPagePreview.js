import React from "react";
import PropTypes from "prop-types";

import { format } from "../../utils/date";
import { Article } from "../../components/News/Article/Article";
import { PreviewContainer } from "../../components/CmsPreviewContainer/CmsPreviewContainer";
import { NewsContainer } from "../../styles/about";
import { News } from "../../components/NewsCard/NewsCard";
import styles, { Row } from "../../styles/cms";

const AboutPreview = ({ entry, widgetFor }) => (
  <PreviewContainer className={styles.aboutBg}>
    <Row>
      <NewsContainer>
        <News
          title={entry.getIn(["data", "title"])}
          date={entry.getIn(["data", "date"])}
          description={entry.getIn(["data", "description"])}
          link={entry.getIn(["data", "link"])}
          logo={entry.getIn(["data", "logo"])}
        />
      </NewsContainer>
    </Row>
    <Row style={{ backgroundColor: "#fff", marginTop: "auto" }}>
      <Article
        title={entry.getIn(["data", "title"])}
        date={format(entry.getIn(["data", "date"]))}
        description={entry.getIn(["data", "description"])}
        link={entry.getIn(["data", "link"])}
        logo={entry.getIn(["data", "logo"])}
      />
    </Row>
  </PreviewContainer>
);

AboutPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPreview;
