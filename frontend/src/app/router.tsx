// Routing 설정
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import Home from "../pages/Home";
import Post from "../pages/Post";
import CreatePost from "../pages/CreatePost";
import Detail from "../pages/Detail";
import Publish from "../pages/Publish";
import OAuthCallback from "../pages/OAucthCallback";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/post",
  component: Post,
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

const oauthCallbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/oauth/callback",
  component: OAuthCallback,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  postRoute,
  createPostRoute,
  detailRoute,
  publishRoute,
  oauthCallbackRoute,
]);

export const router = createRouter({ routeTree });
