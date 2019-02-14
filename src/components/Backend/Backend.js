import React, { Component } from "react";
import PropTypes from "prop-types";

import { BackendContainer } from "./styles";
import { hexToRGB } from "../../utils/color";

export class BackendComponent extends Component {
  static propTypes = {
    selectedSectionIndex: PropTypes.number,
    sections: PropTypes.arrayOf(PropTypes.object),
  };

  shouldComponentUpdate({ selectedSectionIndex: nextSelectedSectionIndex }, nextState) {
    const { selectedSectionIndex } = this.props;

    return selectedSectionIndex !== nextSelectedSectionIndex;
  }

  render() {
    const { sections, selectedSectionIndex } = this.props;
    const first = sections[selectedSectionIndex + 1];
    const second = sections[selectedSectionIndex + 2];

    return (
      <BackendContainer>
        <div
          style={{
            background:
              first && (first.projectBackgroundColor ? first.projectBackgroundColor : "#fff"),
            boxShadow:
              first &&
              (first.projectBackgroundColor
                ? `0 8px 8px 0 ${hexToRGB(first && first.projectBackgroundColor, 0.1)}`
                : "0 8px 8px 0 rgba(10, 18, 33, 0.1)"),
          }}
        />
        <div
          style={{
            background:
              second && (second.projectBackgroundColor ? second.projectBackgroundColor : "#fff"),
            boxShadow:
              second &&
              (second.projectBackgroundColor
                ? `0 8px 8px 0 ${hexToRGB(second && second.projectBackgroundColor, 0.1)}`
                : "0 8px 8px 0 rgba(10, 18, 33, 0.1)"),
          }}
        />
      </BackendContainer>
    );
  }
}
