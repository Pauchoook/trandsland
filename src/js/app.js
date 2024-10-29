import * as functions from "./files/functions.js";

import "../scss/style.scss";
import spoller from "./files/spoller.js";
import services from "./files/services.js";
import burger from "./files/burger.js";
import sliders from "./files/sliders.js";
import modal, { openSuccessModal } from "./files/modal.js";
import more from "./files/more.js";
import fancy from "./files/fancy.js";
import select from "./files/select.js";
import map from "./files/map.js";
import show from "./files/show.js";

functions.mediaAdaptive();
spoller();
services();
burger();
sliders();
modal();
more();
fancy();
select();
map();
show();