import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { TeamMembers } from "../TeamMembers/TeamMembers";

export class ScrollableTeamMembers extends PureComponent {
  static propTypes = {
    onSectionChange: PropTypes.func,
    transitionEnd: PropTypes.bool,
    sections: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const { selectedId, onSectionChange, sections } = this.props;

    return (
      <>
        {sections.map(item => (
          <TeamMembers
            key={item.id}
            sections={sections}
            selectedId={selectedId}
            onSectionChange={onSectionChange}
            {...item}
          />
        ))}
      </>
    );
  }
}
