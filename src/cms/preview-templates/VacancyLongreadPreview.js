import React from "react";
import PropTypes from "prop-types";

import { Vacancy } from "../../templates/vacancy";
import { PreviewContainer } from "../../components/CmsPreviewContainer/CmsPreviewContainer";

const VacancyLongreadPreview = ({ entry, widgetFor }) => (
  <PreviewContainer scrollable>
    <Vacancy
      name={entry.getIn(["data", "name"])}
      avatar={entry.getIn(["data", "avatar"])}
      workFormat={entry.getIn(["data", "workFormat"])}
      employment={entry.getIn(["data", "employment"])}
      salary={entry.getIn(["data", "salary"])}
      contacts={entry.getIn(["data", "contacts"]).toJS()}
      skills={entry.getIn(["data", "skills"])}
      expectations={entry.getIn(["data", "expectations"]).toJS()}
      attachmentBlock={entry.getIn(["data", "attachmentBlock"]).toJS()}
      sentence={entry.getIn(["data", "sentence"]).toJS()}
      footerText={widgetFor("footerText")}
    />
  </PreviewContainer>
);

VacancyLongreadPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default VacancyLongreadPreview;
