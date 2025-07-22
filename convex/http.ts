import { httpRouter } from "convex/server";
import { auth } from "./auth";

const http = httpRouter();

auth.addHttpRoutes(http);
auth.addHttpRoutes(httpRouter());
addEventListener("fetch", (event) => {
  event.respondWith(http.handle(event.request));
});
export default http;
