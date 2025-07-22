import { httpRouter } from "convex/server";
import { auth } from "./auth";

const http = httpRouter();

auth.addHttpRoutes(http);
auth.addHttpRoutes(httpRouter());
export default http;
