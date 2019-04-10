import CMS from "netlify-cms";

import AboutPreview from "./preview-templates/AboutPagePreview";
import VacancyLongreadPreview from "./preview-templates/VacancyLongreadPreview";
import { injectGlobals } from "../components/injectGlobals";

injectGlobals();

CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("vacancy", VacancyLongreadPreview)
