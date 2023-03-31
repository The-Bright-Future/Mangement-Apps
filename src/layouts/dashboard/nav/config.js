// component
import SvgColor from '../../../components/svg-color';
import { BiPurchaseTag, BiImport } from 'react-icons/bi';
import { FaFirstOrderAlt,FaArrowAltCircleLeft } from "react-icons/fa";
import Typography from 'src/theme/overrides/Typography';


// ----------------------------------------------------------------------
const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  // obaidul config start
  {
    title: 'Purchases',
  },
  {
    title: 'purchase',
    path: '/dashboard/purchase',
    icon: <BiPurchaseTag/>,
  },
  {
    title: 'importPurchase',
    path: '/dashboard/importPurchase',
    icon: <BiImport/>,
  },
  {
    title: 'purchaseOrder',
    path: '/dashboard/purchaseOrder',
    icon: <FaFirstOrderAlt/>,
  },
  {
    title: 'purchaseReturn',
    path: '/dashboard/purchaseReturn',
    icon: <FaArrowAltCircleLeft/>,
  },
  // obaidul config end
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
