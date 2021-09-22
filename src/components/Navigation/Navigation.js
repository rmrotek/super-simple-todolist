import { Link as RouterLink } from "react-router-dom";
import { routerPaths } from "../../helpers/routerPaths";

const Navigation = (props) => {
  return (
    <>
      <div>
        <RouterLink to={routerPaths.root}>Login</RouterLink>
        <RouterLink to={routerPaths.dashboard}>Dashboard</RouterLink>
      </div>
      <div>
        {props.children}
      </div>
    </>
  );
};

export default Navigation;
