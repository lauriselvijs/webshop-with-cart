import { useParams, useNavigate } from "react-router-dom";
import React from "react";

export const withRouterHOC = (Children) => {
  const withRouter = (props) => {
    const match = { params: useParams() };
    const navigate = { to: useNavigate() };

    return <Children {...props} match={match} navigate={navigate} />;
  };
  withRouter.displayName = "withRouter";
  return withRouter;
};
