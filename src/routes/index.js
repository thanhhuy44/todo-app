import Content from "../layouts/components/Content";
import MainLayout from "../layouts/MainLayout/MainLayout";
import OnlyContentLayout from "../layouts/OnlyContentLayout";
import Login from "../pages/Login";
const routes = [
  {
    path: "/",
    component: Content,
    layout: MainLayout,
  },
  {
    path: "/login",
    component: Login,
    layout: OnlyContentLayout,
  },
];

export default routes;
