import { searchRoutes, getLabel } from './Breadcrumbs';
import { routes } from '../../utils';

describe('BreadCrump test ', () => {
  it('check if path isEqual null', () => {
    const currentRoutes = searchRoutes(routes, '');
    expect(currentRoutes).toEqual([]);
  });

  it('check if routes does not exist', () => {
    const currentRoutes = searchRoutes(null, '/about');
    expect(currentRoutes).toEqual(null);
  });

  it('return object with label', () => {
    const path = '/about/consultations/details';
    const currentRoutes = getLabel(routes, path);
    expect(currentRoutes).toEqual('O mnie/Konsultacje/Details');
  });
});
