// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'subscriptions',
      title: 'Subscriptions',
      type: 'item',
      url: '/subscriptions',
      icon: icons.ChromeOutlined
    },
    {
      id: 'developer',
      title: 'Developer',
      type: 'item',
      url: '/developer',
      icon: icons.ChromeOutlined
    }
  ]
};

export default pages;
