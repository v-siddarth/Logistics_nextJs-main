import path from "path";

type MenuItem = {
  title: string;
  path?: string;
  submenu?: { title: string; path: string; }[];
};

const menu_data: MenuItem[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/about',
  },
  {
    title: 'Services',
    path: '/service-details',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  // {
  //   title: 'Page',
  //   submenu: [
  //     { title: 'About', path: '/about' },
  //     { title: 'Service', path: '/service' },
  //     { title: 'Project', path: '/projects-gallery' },
  //     { title: 'Tracking', path: '/tracking' },
  //     { title: 'Team', path: '/team' },
  //     { title: 'Blog', path: '/blog' },
  //     { title: 'Faq', path: '/faq' },
  //   ],
  // },
  {
    title: 'Contact',
    path: '/contact',
  },
];


export default menu_data