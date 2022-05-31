import { useParams, useNavigate, useLocation } from "react-router-dom";
import React from "react";

export const withRouterHOC = (Children) => {
  const withRouter = (props) => {
    const match = { params: useParams() };
    const navigate = { to: useNavigate() };
    const location = useLocation();

    return (
      <Children
        {...props}
        match={match}
        navigate={navigate}
        location={location}
      />
    );
  };
  withRouter.displayName = "withRouter";
  return withRouter;
};
