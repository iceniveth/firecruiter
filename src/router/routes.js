const dashboard = () => import('../pages/Dashboard');
const requisitions = () => import('../pages/Requisitions');
const applicants = () => import('../pages/Applicants');
const requisitionEdit = () => import('../pages/RequisitionEdit');
const requisitionView = () => import('../pages/RequisitionView');
const applicantEdit = () => import('../pages/ApplicantEdit');
const applicantView = () => import('../pages/ApplicantView');

export default {
  default: {
    path: '/',
    redirect: '/dashboard',
    meta: {}
  },
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
  requisitionView: {
    path: '/requisitions/:id',
    name: 'requisitionView',
    component: requisitionView,
    meta: {}
  },
  requisitionCreate: {
    path: '/requisitions/create',
    name: 'requisitionCreate',
    component: requisitionEdit,
    meta: {}
  },
  requisitionEdit: {
    path: '/requisitions/:id/edit',
    name: 'requisitionEdit',
    component: requisitionEdit,
    meta: {}
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
  },
  applicantView: {
    path: '/applicants/:id',
    name: 'applicantView',
    component: applicantView,
    meta: {}
  },
  applicantCreate: {
    path: '/applicants/create',
    name: 'applicantCreate',
    component: applicantEdit,
    meta: {}
  },
  applicantEdit: {
    path: '/applicants/:id/edit',
    name: 'applicantEdit',
    component: applicantEdit,
    props: true,
    meta: {}
  }
};
