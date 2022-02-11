import { useParams, useLocation } from "react-router-dom";
import React from "react";

export const withRouterHOC = (Children) => {
  const withRouter = (props) => {
    const match = { params: useParams() };
    const location = { params: useLocation() };

    return <Children {...props} match={match} location={location} />;
  };
  withRouter.displayName = "withRouter";
  return withRouter;
};
