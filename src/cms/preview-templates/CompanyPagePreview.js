import React from "react";

import { PreviewContainer } from "../../components/CmsPreviewContainer/CmsPreviewContainer";
import { Company } from "../../pages/company";

const CompanyPagePreview = ({ entry, widgetFor }) => {
  const aboutUs = entry.getIn(["data", "aboutUs"]);
  const aboutProducts = entry.getIn(["data", "aboutProducts"]);
  const aboutCustomers = entry.getIn(["data", "aboutCustomers"]);
  const development = entry.getIn(["data", "development"]);
  const employees = entry.getIn(["data", "employees"]);

  return (
    <PreviewContainer scrollable>
      <Company
        title={entry.getIn(["data", "title"])}
        employees={employees ? employees.toJS() : employees}
        aboutUs={aboutUs ? aboutUs.toJS() : aboutUs}
        aboutProducts={aboutProducts ? aboutProducts.toJS() : aboutProducts}
        aboutCustomers={aboutCustomers ? aboutCustomers.toJS() : aboutCustomers}
        development={development ? development.toJS() : development}
        footer={widgetFor("footer")}
        chatText={entry.getIn(["data", "chatText"])}
      />
    </PreviewContainer>
  );
};

export default CompanyPagePreview;
