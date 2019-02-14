import { Component } from "react";
import ReactDOM from "react-dom";

const PORTAL_ROOT_ID = "portal-root";

const getPortalRoot = () => {
  let root = typeof window === "object" && document.getElementById(PORTAL_ROOT_ID);

  if (!root && typeof window === "object") {
    root = document.createElement("div");
    root.id = PORTAL_ROOT_ID;
    document.body.appendChild(root);
  }

  return root;
};

const portalRoot = getPortalRoot();

export class Portal extends Component {
  render() {
    return ReactDOM.createPortal(this.props.children, portalRoot);
  }
}
