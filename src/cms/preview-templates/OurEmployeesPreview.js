import React from "react";

import { PreviewContainer } from "../../components/CmsPreviewContainer/CmsPreviewContainer";
import { TeamMembers } from "../../components/TeamMembers/TeamMembers";

import styles, { EmployeesContainer } from "../../styles/cms";

const CompanyPagePreview = ({ entry }) => {
  const employees = entry.getIn(["data", "employees"]);

  return (
    <PreviewContainer scrollable withExplanations={false} className={styles.jobsBg}>
      <EmployeesContainer>
        <TeamMembers
          preview
          items={employees ? employees.toJS().filter(employee => employee.isVisible) : []}
        />
      </EmployeesContainer>
    </PreviewContainer>
  );
};

export default CompanyPagePreview;
