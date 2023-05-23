// assets
import { DashboardOutlined, BarChartOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  BarChartOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/explorer',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'charts',
      title: 'Charts',
      type: 'item',
      url: '/charts',
      icon: icons.BarChartOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
