import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import Customers from './pages/peoples/Customers.jsx';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import LoginLayout from './layouts/loginLayout/LoginLayout';
import Supplier from './pages/peoples/Supplier';
import Users from './pages/peoples/Users';
import Stores from './pages/peoples/Stores';
import AddCustomer from './pages/peoples/AddCustomer';
import AddStore from './pages/peoples/AddStore';
import AddUser from './pages/peoples/AddUser';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <LoginLayout />,
      children: [
        {
          path: '/',
          element: <LoginPage />
        },
        {
          path: '/login',
          element: <LoginPage />
        }
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'customer', element: <Customers /> },
        { path: 'customer/addcustomer', element: <AddCustomer /> },
        { path: 'supplier', element: <Supplier /> },
        { path: 'users', element: <Users /> },
        { path: 'users/adduser', element: <AddUser /> },
        { path: 'store', element: <Stores /> },
        { path: 'store/addstore', element: <AddStore /> },
      ],
    },

    {
      element: <SimpleLayout />,
      children: [
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
