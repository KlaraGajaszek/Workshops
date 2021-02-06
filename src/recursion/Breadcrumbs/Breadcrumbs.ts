import { routes } from '../../utils';

export const searchRoutes = (routes, path) => {
    if (path.length === 0) return [];

    const node = routes.find((elem) => path.startsWith(elem.path));

    if (!node) {
        return null;
    }

    const currentPathLength = node.path.length;
    const actualPath = path.slice(currentPathLength);

    const breadcrumbs = searchRoutes(node.routes, actualPath);

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

// //todo: zwrócić inny kształt obiektu na koniec, w path mieć gotowy url

console.log(searchRoutes(routes, '/about/consultations/details'));
