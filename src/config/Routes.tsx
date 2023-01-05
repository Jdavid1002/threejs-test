import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../screens/Home/Home";
import Skills from "../screens/Skills/Skills";
import Proyects from "../screens/Proyects/Proyects";


function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/proyects">
          <Proyects />
        </Route>
      </Switch>
    </Router>
  );
}


export default Routes