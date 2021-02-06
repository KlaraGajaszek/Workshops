"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Breadcrumbs_1 = require("./recursion/Breadcrumbs/Breadcrumbs");
const description_1 = require("./recursion/Breadcrumbs/description");
const path = '/about/consultations/collaboration';
const BreadCrumb = Breadcrumbs_1.Breadcrumbs(description_1.routes, path);
console.log("BreadCrumb", BreadCrumb);
window.onload = description_1.routes;
//# sourceMappingURL=main.js.map