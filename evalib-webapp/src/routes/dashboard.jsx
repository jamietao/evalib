// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
// core components/views
import DashboardPage from "pages/Dashboard/Dashboard.jsx";
import UserProfile from "pages/UserProfile/UserProfile.jsx";
import EvaluationList from "pages/Evaluation/EvaluationList.jsx";
import Typography from "pages/Typography/Typography.jsx";
import Icons from "pages/Icons/Icons.jsx";
import NotificationsPage from "pages/Notifications/Notifications.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "仪   表   盘",
    navbarName: "仪   表   盘",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/table",
    sidebarName: "题目管理",
    navbarName: "题目管理",
    icon: "content_paste",
    component: EvaluationList
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/notifications",
    sidebarName: "系统通知",
    navbarName: "系统通知",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/user",
    sidebarName: "用户管理",
    navbarName: "用户管理",
    icon: Person,
    component: UserProfile
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
