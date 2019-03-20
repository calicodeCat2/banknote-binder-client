import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Register from "@/components/Register";
import Login from "@/components/Login";
import NoteBrowser from "@/components/NoteBrowser";
import NewIssues from "@/components/NewIssues";
import Banknotes from "@/components/Banknotes";
import Users from "@/components/Users";
import NoteFilter from "@/components/NoteFilter";
import ForumMain from "@/components/ForumMain";
import Test from "@/components/Test";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
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
      path: "/banknotes/browse",
      name: "browse",
      component: NoteBrowser
    },
    {
      path: "/banknotes/newIssues",
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
      path: "/filter",
      name: "filter",
      component: NoteFilter
    },
    {
      path: "/forum",
      name: "forum",
      component: ForumMain
    },
    {
      path: "/users",
      name: "users",
      component: Users
    },
  ]
});
