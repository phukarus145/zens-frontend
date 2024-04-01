import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../components/common/Header";
import HrDashboard from "./Dashboard/Joke";
import PageHeader1 from "../components/common/PageHeader1";

import { ToastContainer } from "react-toastify";

import { useSelector } from "react-redux";
import Joke from "./Dashboard/Joke";


function MainIndex(props) {
  const { activekey } = props;

  const isAuthenticated = useSelector(
    (state) => state.auth?.login?.currentUser
  ); // Replace with your authentication state
  const userRole = localStorage.getItem("role"); // Replace with the user's role from authentication

  const PrivateRoute = ({ path, roles, element: Element }) => {
    const isAuthorized = isAuthenticated && roles.includes(userRole);
    if (!isAuthenticated) {
      return <Navigate to="/timeout" replace />;
    }
    return isAuthorized ? <Element /> : <Navigate to="/unauthorized" replace />;
  };
  return (
    <div className="main px-lg-4 px-md-4">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {activekey !== "/chat-app" ? (
        activekey === "/documentation" ? (
          <PageHeader1 />
        ) : (
          <Header />
        )
      ) : (
        ""
      )}
      <div className="body d-flex py-lg-3 py-md-2">
        <Routes>
          <Route
            path={`${process.env.PUBLIC_URL}/`}
            element={<Joke />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default MainIndex;
