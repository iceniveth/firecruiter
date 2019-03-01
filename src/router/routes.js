const dashboard = () => import('../pages/Dashboard');
const requisitions = () => import('../pages/Requisitions');
const applicants = () => import('../pages/Applicants');

export default {
  dashboard: {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: {
      navigation: {
        icon: 'dashboard',
        text: 'Dashboard'
      }
    }
  },
  requisitions: {
    path: '/requisitions',
    name: 'requisitions',
    component: requisitions,
    meta: {
      navigation: {
        icon: 'fa-sitemap',
        text: 'Requisitions'
      }
    }
  },
  applicants: {
    path: '/applicants',
    name: 'applicants',
    component: applicants,
    meta: {
      navigation: {
        icon: 'fa-users',
        text: 'Applicants'
      }
    }
  }
};
