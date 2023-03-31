import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Purchase from './pages/Purchases/Purchase';
import ImportPurchases from './pages/Purchases/ImportPurchases';
import PurchaseOrder from './pages/Purchases/PurchaseOrder';
import PurchaseReturn from './pages/Purchases/PurchaseReturn';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />,index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },

        // obaidul route setup

        { path: 'purchase', element: <Purchase /> },
        { path: 'importPurchase', element: <ImportPurchases /> },
        { path: 'purchaseOrder', element: <PurchaseOrder /> },
        { path: 'purchaseReturn', element: <PurchaseReturn /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },

    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
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
