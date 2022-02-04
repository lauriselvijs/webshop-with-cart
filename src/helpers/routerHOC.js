import { useParams, useLocation } from "react-router-dom";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    const location = { params: useLocation() };

    return <Children {...props} match={match} location={location} />;
  };
}
