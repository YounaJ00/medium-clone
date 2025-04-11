// Routing 설정
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import Home from "../pages/Home";
import Main from "../pages/Main";
import CreatePost from "../pages/CreatePost";
import Detail from "../pages/Detail";
import Publish from "../pages/Publish";
// import SignIn from "../pages/SignIn";
// import SignUp from "../pages/SignUp";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/main",
  component: Main,
});
const createPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/createpost",
  component: CreatePost,
});
const detailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/detail/$articleId",
  component: Detail,
});
const publishRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/publish",
  component: Publish,
});
// const signInRoute = createRoute({getParentRoute: () => rootRoute, path: '/signin', component: SignIn})
// const signUpRoute = createRoute({getParentRoute: () => rootRoute, path: '/signup', component: SignUp})

const routeTree = rootRoute.addChildren([
  homeRoute,
  mainRoute,
  createPostRoute,
  detailRoute,
  publishRoute,
  // signInRoute,
  // signUpRoute,
]);

export const router = createRouter({ routeTree });
