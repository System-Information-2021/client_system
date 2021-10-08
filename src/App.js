import React, { Suspense, useEffect, useState } from 'react';
import { useHistory, Redirect } from "react-router-dom"
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import appRoutes from './routes';
import './App.css';

function App() {

  console.log("app router", appRoutes)

  const showLayout = (routes) => {
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

  return (
    <BrowserRouter>
      <div className="app">
        {/* ĐỪNG BAO GIỜ ĐỂ ErrorBoundary và Suspense BÊN TRONG Switch, trong Switch chỉ có Route thôi.
        nếu không sẽ bị lỗi chuyển trang. Phải bọc ngay bên ngoài Switch như thế này thì mới đúng quy định của React */}
        <ErrorBoundary>
          <Suspense fallback={<div>Processing...</div>}>
            <Switch>{showLayout(appRoutes)}</Switch>
          </Suspense>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;