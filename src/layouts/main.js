import React, { Component } from "react";

import { MainLayoutProvider } from "../components/MainLayoutProvider/MainLayoutProvider";
import { Helmet } from "../components/Helmet/Helmet";
import { ViewportHeight } from "../components/ViewportHeight/ViewportHeight";
import { Navbar } from "../components/Navbar/Navbar";
import { PageTransition } from "../components/Transition/PageTransition";

export class MainLayout extends Component {
  render() {
    const { children, location, allMarkdownRemark } = this.props;

    return (
      <MainLayoutProvider>
        <Helmet />
        <ViewportHeight />
        <Navbar location={location} data={allMarkdownRemark ? allMarkdownRemark.edges : []} />
        <PageTransition location={location}>{children}</PageTransition>
      </MainLayoutProvider>
    );
  }
}
