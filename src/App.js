import React, { Suspense, useEffect, useState } from 'react';
import { useHistory, Redirect } from "react-router-dom"
import { actGetUserDetail } from './redux/User/user.actions';
import ErrorBoundary from './components/ErrorBoundary';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "react-pagination-library/build/css/index.css"; //for css
import appRoutes from './routes';
import { checkExpireToken } from './services/auth';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true)
  let history = useHistory()
  const dispatch = useDispatch()



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

  useEffect(() => {
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("token")) {
        dispatch(actGetUserDetail(localStorage.getItem("token"), (userData) => {
          if (userData) {
            if (userData.data.isadmin === true) {
              history.push("/admin")
            } else {
              history.push("/")
            }
          }
          setLoading(false)
        }))
      } else {
        setLoading(false)
      }
    }
    fetchData()
    // checkExpireToken()
  }, [])

  if (loading) return <div className="container">Processing...</div>;
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