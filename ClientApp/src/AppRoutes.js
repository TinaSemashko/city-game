// // import { Counter } from "./components/Counter";
// // import { FetchData } from "./components/FetchData";
//import Home from "./components/Home.js";

import React, { Suspense, lazy } from "react";
import { Routes as Router, Route } from "react-router";
import NotFound from "./components/notFound";

const Home = lazy(() => import("./components/Home"));
const Counter = lazy(() => import("./components/Counter"));

// const AppRoutes = [
//   {
//     index: true,
//     element: <Home />,
//   },
//   //   // {
//   //   //   path: "/counter",
//   //   //   element: <Counter />,
//   //   // },
//   //   // {
//   //   //   path: "/fetch-data",
//   //   //   element: <FetchData />,
//   //   // },
// ];
export const AppRoutes = () => (
  <Router>
    {/* <Route path="/" element={<Layout />}> */}
    {/* <Route index element={<Home />} /> */}
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="Home" element={<Home />} />
    </Suspense>
    <Route path="counter" element={<Counter />} />
    <Route path="*" element={<NotFound />} />
    {/* </Route> */}
  </Router>
);
export default AppRoutes;
