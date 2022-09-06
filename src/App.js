import { useState } from "react";
import { useSelector } from "react-redux";
import MainStyle from "./components/MainStyle/MainStyle";
import MainLayout from "./layouts/MainLayout/MainLayout";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Login from "./pages/Login";

function App() {
  const isLogin = useSelector((state) => state.todos.isLogin);
  return (
    <div className="App">
      <MainStyle>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout isLogin={isLogin}>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </MainStyle>
    </div>
  );
}

export default App;
