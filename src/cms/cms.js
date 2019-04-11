import CMS from "netlify-cms";

import preview from "../assets/preview.scss";
import AboutPreview from "./preview-templates/AboutPagePreview";
import VacancyLongreadPreview from "./preview-templates/VacancyLongreadPreview";
import { injectGlobals } from "../components/injectGlobals";

injectGlobals();
CMS.registerPreviewStyle(preview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("vacancy", VacancyLongreadPreview);
