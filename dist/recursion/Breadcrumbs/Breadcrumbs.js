"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumbs = void 0;
const Breadcrumbs = (routes, path) => {
    if (path.length === null)
        [];
    const node = routes.find((breadcrumb) => path.startsWith(breadcrumb.path));
    const currentFirstChartPathLength = node.path.length;
    const currentPath = path.slice(6);
    const newBreadcrumbInstance = exports.Breadcrumbs(node, currentPath);
    console.log(newBreadcrumbInstance, "newBreadcrumbInstance");
};
exports.Breadcrumbs = Breadcrumbs;
//# sourceMappingURL=Breadcrumbs.js.map