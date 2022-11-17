import Welcome from "../views/Welcome.js";
import Promises from "../views/async/Promises.js";
import Async from "../views/async/Async.js";
import AsyncAwait from "../views/async/AsyncAwait.js";
import ES6Modules from "../views/ES6Modules.js";

export const routes = [
  { path: "/", template: Welcome },
  { path: "/modules", template: ES6Modules },
  { path: "/async", template: Async },
  { path: "/promise", template: Promises },
  { path: "/async-await", template: AsyncAwait },
];
