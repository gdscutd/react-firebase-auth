import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("sign-up", "./auth/sign-up.tsx"),
] satisfies RouteConfig;
