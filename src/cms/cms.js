import CMS from "netlify-cms";

import AboutPreview from "./preview-templates/AboutPagePreview";

import { injectGlobals } from "../components/injectGlobals";

injectGlobals();

CMS.registerPreviewTemplate("about", AboutPreview);
