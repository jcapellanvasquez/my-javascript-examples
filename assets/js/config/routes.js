import Welcome from '../views/Welcome.js';
import Promises from '../views/async/Promises.js';
import Async from '../views/async/Async.js';
import AsyncAwait from '../views/async/AsyncAwait.js';

export const routes = [
    {path: "/", template: Welcome},
    {path: "/async", template: Async},
    {path: "/promise", template: Promises},
    {path: "/async-await", template: AsyncAwait}
];
