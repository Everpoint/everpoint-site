import React from "react";
import PropTypes from "prop-types";

import { PreviewContainer } from "../../components/CmsPreviewContainer/CmsPreviewContainer";
import { Politics } from "../../pages/politics";

const PoliticsPagePreview = ({ entry, widgetFor }) => {
  const blocksData = entry.getIn(["data", "blocks"]);
  const blocks = blocksData ? blocksData.toJS().map(item => ({ block: item.block })) : [];

  return (
    <PreviewContainer scrollable>
      <Politics
        title={entry.getIn(["data", "title"])}
        city={entry.getIn(["data", "city"])}
        updateDate={entry.getIn(["data", "updateDate"])}
        introduction={widgetFor("introduction")}
        blocks={blocks}
      />
    </PreviewContainer>
  );
};

PoliticsPagePreview.propTypes = {
  component: PropTypes.bool,
};

export default PoliticsPagePreview;
