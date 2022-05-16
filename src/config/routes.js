import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

import Admin from "../pages/Admin";
import Signin from "../pages/Admin/Signin";
import HomePage from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const routesAdmin = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: Admin,
  },
  {
    path: "/admin/login",
    layout: LayoutAdmin,
    component: Signin,
  },
];

const globalRoutes = [
  {
    path: "*",
    layout: LayoutAdmin,
    component: NotFound,
  },
];

const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    component: HomePage,
  },
  {
    path: "/contact",
    layout: LayoutBasic,
    component: Contact,
  },
];

const routes = [...routesAdmin, ...routesClient, ...globalRoutes];

export default routes;
