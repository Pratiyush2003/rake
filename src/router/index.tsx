import COMPONENTS from '@/pages/COMPONENTS';
import Home from '@/pages/home';
import Blog from '@/pages/blog';
import { NotFoundPage } from '@/pages/not-found';
import Trades from '@/pages/trades';
import { createBrowserRouter } from 'react-router-dom';
import BlogPost from '@/pages/blog-post';
import Blogcategory from '@/pages/blog-category';
import Dashboard from '@/pages/Dashboard/Dashboard';
import DicePage from '@/pages/dicepage';
import Bonus from '@/pages/Bonus/Bonus';
import Callback from '@/store/authoidc/callback';
import ProtectedRoute from '@/components/ProtectedRoute';
import Trade from '@/pages/Trade';
import { ReferralSystem } from '@/pages/refferralSystem';
import CasinoSuites from '@/pages/CasinoSuite';

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/:category/:id',
    element: <BlogPost />,
  },
  {
    path: '/blog/:category',
    element: <Blogcategory />,
  },
  {
    path: '/trades',
    element: <Trades />,
    name: 'TRADE',
  },
  {
    path: '/COMPONENTS',
    element: <COMPONENTS />,
    name: 'COMPONENTS',
  },
  {
    path: '/referral',
    element: <ReferralSystem />,
  },
  {
    path: '/casino/originals/dice-game',
    element: <DicePage />,
    name: 'dicepage',
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/auth-callback',
    element: <Callback />,
    name: 'auth-callback',
  },
  {
    path: '/trade',
    element: <Trade />,
  },
  {
    path: '/casino/:pages?',
    element: <CasinoSuites />,
    name: '/casinotablobby',
  },
  {
    path: '/bonus',
    element: <Bonus />,
  },
  //   {
  //     path: '/casino',
  //     element: <Casino />,
  //     children: [
  //       {
  //         path: '/lobby',
  //         element: <CasinoLobby />,
  //       },
  //       {
  //         path: '/:id',
  //         element: <CasinoGame />,
  //       },
  //     ],
  //   },
];

export default routes;
