import React, { Suspense, useEffect, useState } from 'react';
import { useHistory, Redirect } from "react-router-dom"
import { actLogout } from "./redux/User/user.actions"
import jwt_decode from "jwt-decode";
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "react-pagination-library/build/css/index.css"; //for css
import appRoutes from './routes';
import './App.css';

function App() {
  let user = JSON.parse(localStorage.getItem("user"));
  let token = localStorage.getItem("token")



  const showLayout = (routes) => {
    console.log(routes)

    if (routes && routes.length > 0) {
      return routes.map((item, idx) => (
        <Route
          key={idx}
          exact={item.exact}
          path={item.path}
          render={(props) => <item.component {...props} routes={item.routes} />}
        />
      ));
    }
  };


  useEffect(() => {
    console.log("user", user)
    if (token !== null) {
      const decodedToken = jwt_decode(token)

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        actLogout();
      }
    }
  }, [token])


  return (
    <BrowserRouter>
      <div className="app">
        {/* ĐỪNG BAO GIỜ ĐỂ ErrorBoundary và Suspense BÊN TRONG Switch, trong Switch chỉ có Route thôi.
        nếu không sẽ bị lỗi chuyển trang. Phải bọc ngay bên ngoài Switch như thế này thì mới đúng quy định của React */}
        <ErrorBoundary>
          <Suspense fallback={<div className="contaner">Processing...</div>}>
            <Switch>{showLayout(appRoutes)}</Switch>
          </Suspense>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;