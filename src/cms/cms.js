import CMS from "netlify-cms";
import * as ColorWidget from "netlify-cms-widget-color";

import preview from "../assets/preview.scss";
import AboutPreview from "./preview-templates/AboutPagePreview";
import VacancyLongreadPreview from "./preview-templates/VacancyLongreadPreview";
import PoliticsPagePreview from "./preview-templates/PoliticsPagePreview";
import { injectGlobals } from "../components/injectGlobals";

injectGlobals();
CMS.registerWidget("color", ColorWidget.Control);
CMS.registerPreviewStyle(preview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("vacancy", VacancyLongreadPreview);
CMS.registerPreviewTemplate("politics-page", PoliticsPagePreview);
