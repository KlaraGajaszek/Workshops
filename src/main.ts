import { getLabel } from './recursion/Breadcrumbs/Breadcrumbs';
import { sum2020, sum2020Part2, sum2020Part3, getThreeValues } from './AdventOfCode/Day1';
import { input, routes } from './utils';

const path = '/about/consultations/details';

const Day1 = sum2020Part3();
const currentRoutes = getLabel(routes, path);
window.onload();
