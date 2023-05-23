import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardExplorer = Loadable(lazy(() => import('pages/dashboard')));
const ChartPage = Loadable(lazy(() => import('pages/charts')));

// render - pages
const SubscriptionsPage = Loadable(lazy(() => import('pages/extra-pages/Subscriptions')));
const DeveloperPage = Loadable(lazy(() => import('pages/extra-pages/Developer')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardExplorer />
    },

    {
      path: 'explorer',
      element: <DashboardExplorer />
    },
    {
      path: 'charts',
      element: <ChartPage />
    },
    {
      path: 'subscriptions',
      element: <SubscriptionsPage />
    },
    {
      path: 'developer',
      element: <DeveloperPage />
    }
  ]
};

export default MainRoutes;
