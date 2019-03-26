import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import About from "@/components/About";
import Register from "@/components/Register";
import Login from "@/components/Login";
import NoteBrowser from "@/components/NoteBrowser";
import NewIssues from "@/components/NewIssues";
import Banknotes from "@/components/Banknotes";
import CountrySelect from "@/components/selects/CountrySelect";
import RegionSelect from "@/components/selects/RegionSelect"
import CombinedSelect from "@/components/selects/CombinedSelect"
import ForumMain from "@/components/ForumMain";
import Test from "@/components/Test";
import Dashboard from "@/components/Dashboard";
import CollectionStats from "@/components/DashboardItems/CollectionStats";
import CollectionView from "@/components/DashboardItems/CollectionView";
import CollectionAdd from "@/components/DashboardItems/CollectionAdd";
import WantListView from "@/components/DashboardItems/WantListView";
import WantListAdd from "@/components/DashboardItems/WantListAdd";



Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/browse",
      name: "browse",
      component: NoteBrowser
    },
    {
      path: "/newIssues",
      name: "newissues",
      component: NewIssues
    },
    {
      path: "/banknotes",
      name: "banknotes",
      component: Banknotes
    },
    {
      path: "/test",
      name: "test",
      component: Test
    },
    {
      path: "/country",
      name: "country",
      component: CountrySelect
    },
    {
      path: "/select",
      name: "select",
      component: CombinedSelect
    },
    {
      path: '/region',
      name: 'region',
      component: RegionSelect
    },
    {
      path: "/forum",
      name: "forum",
      component: ForumMain
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/collection",
      name: "collection",
      component: CollectionStats
    },
    {
      path: "/collectionview",
      name: "CollectionView",
      component: CollectionView
    },
    {
      path: "/collectionadd",
      name: "CollectionAdd",
      component: CollectionAdd
    },
    {
      path: "/wantlistview",
      name: "WantListView",
      component: WantListView
    },
    {
      path: "/wantlist",
      name: "WantListAdd",
      component: WantListAdd
    },
    
  ]
});

// rediredct to loing page if not ogged in and trying to access a restircted page
// Router.beforeEach((to, from, next) => {
//   const publicPages = ['/', '/login', '/register', '/about', '/browse', '/newissues'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/login')
//   }

//   next();
// })