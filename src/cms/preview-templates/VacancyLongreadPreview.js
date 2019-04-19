import React from "react";
import PropTypes from "prop-types";

import { Vacancy } from "../../templates/vacancy";
import { PreviewContainer } from "../../components/CmsPreviewContainer/CmsPreviewContainer";

const VacancyLongreadPreview = ({ entry, widgetFor, widgetsFor }) => {
  const expectations = widgetsFor("expectations")
    .map(item => item)
    .toJS();
  const sentence = widgetsFor("sentence")
    .map(item => item)
    .toJS();

  return (
    <PreviewContainer scrollable>
      <Vacancy
        name={entry.getIn(["data", "name"])}
        avatar={entry.getIn(["data", "avatar"])}
        themeColor={entry.getIn(["data", "themeColor"])}
        workFormat={entry.getIn(["data", "workFormat"])}
        employment={entry.getIn(["data", "employment"])}
        salary={entry.getIn(["data", "salary"])}
        contacts={entry.getIn(["data", "contacts"]).toJS()}
        skills={entry.getIn(["data", "skills"])}
        expectations={{
          expectationsTitle: entry.getIn(["data", "expectations"]).toJS().expectationsTitle,
          requirementsList: expectations.widgets.requirementsList,
        }}
        attachmentBlock={entry.getIn(["data", "attachmentBlock"]).toJS()}
        sentence={{
          sentenceTitle: entry.getIn(["data", "sentence"]).toJS().sentenceTitle,
          sentenceBody: sentence.widgets.sentenceBody,
        }}
        footerText={widgetFor("footerText")}
      />
    </PreviewContainer>
  );
};

VacancyLongreadPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default VacancyLongreadPreview;
