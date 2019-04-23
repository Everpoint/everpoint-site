import React from "react";

import { PreviewContainer } from "../../components/CmsPreviewContainer/CmsPreviewContainer";
// import { PhotoContainer } from "../../components/MobileMainPages/Jobs/styles";
import { TeamMembers } from "../../components/TeamMembers/TeamMembers";

import styles, { EmployeesContainer } from "../../styles/cms";

const CompanyPagePreview = ({ entry }) => {
  const employees = entry.getIn(["data", "employees"]);

  return (
    <PreviewContainer scrollable className={styles.jobsBg}>
      <EmployeesContainer>
        {/*<PhotoContainer>ggwp</PhotoContainer>*/}
        <TeamMembers items={employees ? employees.toJS() : []} />
      </EmployeesContainer>
    </PreviewContainer>
  );
};

export default CompanyPagePreview;
