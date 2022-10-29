// import React, { Component } from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import AppRoutes from "./AppRoutes";
//import { Layout } from "./components/Layout";
// import "./custom.css";

// export default class App extends Component {
//   static displayName = App.name;

//   render() {
//     return (
//       <Layout>
//         <Routes>
//           {AppRoutes.map((route, index) => {
//             const { element, ...rest } = route;
//             return <Route key={index} {...rest} element={element} />;
//           })}
//         </Routes>
//       </Layout>
//     );
//   }
// }
import React from "react";
import ReactDOM from "react-dom";
//import { Home } from "./components/Home";
//import { AppRoutes } from "~/app/appRoutes";

//import "./App.css";

function App() {
  return (
    // <React.Suspense fallback={<span>Loading...</span>}>
    //   <Router>
    //     {AppRoutes.map((route, index) => {
    //       const { element, ...rest } = route;
    //       return <Route key={index} {...rest} element={element} />;
    //     })}
    //   </Router>
    // </React.Suspense>
    <AppRoutes />
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
