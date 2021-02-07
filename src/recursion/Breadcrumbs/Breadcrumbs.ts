export const searchRoutes = (routes: any, path: string) => {
  if (path.length === 0) return [];

  const node = routes?.find((elem: any) => path.startsWith(elem.path));

  if (!node) {
    return null;
  }

  const currentPathLength = node.path.length;
  const actualPath = path.slice(currentPathLength);

  const breadcrumbs: any = searchRoutes(node.routes, actualPath);

  if (!breadcrumbs) {
    return null;
  }

  return [
    {
      label: node.label,
      path: node.path,
    },
    ...breadcrumbs,
  ];
};

export const getLabel = (routes: any, path: string) => {
  const currentRoutes = searchRoutes(routes, path);
  const getOnlyRouteLabel = currentRoutes?.map((el: any) => el.label);
  return getOnlyRouteLabel?.join('/');
};
