import React from "react";

import { PreviewContainer } from "../../components/CmsPreviewContainer/CmsPreviewContainer";
import { Company } from "../../pages/company";

const CompanyPagePreview = ({ entry, widgetFor }) => {
  // const blocksData = entry.getIn(["data", "blocks"]);
  // const blocks = blocksData ? blocksData.toJS().map(item => ({ block: item.block })) : [];

  return (
    <PreviewContainer scrollable>
      <Company
        // title={entry.getIn(["data", "title"])}
        // city={entry.getIn(["data", "city"])}
        // updateDate={entry.getIn(["data", "updateDate"])}
        // introduction={widgetFor("introduction")}
        // blocks={blocks}
      />
    </PreviewContainer>
  );
};

export default CompanyPagePreview;
