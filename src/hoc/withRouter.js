import React, { Component } from "react";

export default function(CustomComponent) {
  return class extends Component {
    isHomePage = () => this.props.location.pathname === "/";

    isPortfolioPage = () => this.props.location.pathname.includes("/portfolio");

    isAboutPage = () => this.props.location.pathname.includes("/about");

    isJobsPage = () => this.props.location.pathname.includes("/jobs");

    isContactsPage = () => this.props.location.pathname.includes("/contacts");

    render() {
      return (
        <CustomComponent
          isHomePage={this.isHomePage}
          isPortfolioPage={this.isPortfolioPage}
          isAboutPage={this.isAboutPage}
          isJobsPage={this.isJobsPage}
          isContactsPage={this.isContactsPage}
          {...this.props}
        />
      );
    }
  };
}
