import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { TeamMembers } from "../TeamMembers/TeamMembers";

export class ScrollableTeamMembers extends PureComponent {
  static propTypes = {
    selectedId: PropTypes.string,
    onSectionChange: PropTypes.func,
    scrollToBlock: PropTypes.func.isRequired,
    selectedSectionIndex: PropTypes.number,
    transitionEnd: PropTypes.bool,
    sections: PropTypes.arrayOf(PropTypes.object),
  };

  componentDidUpdate({ transitionEnd: prevTransitionEnd }, prevState) {
    const { transitionEnd, scrollToBlock, selectedSectionIndex } = this.props;
    if (prevTransitionEnd !== transitionEnd && transitionEnd) {
      scrollToBlock(selectedSectionIndex, true);
    }
  }

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
