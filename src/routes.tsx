import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import Schools from "./pages/schoolList";
import SchoolDetails from "./pages/schoolDetails";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/schools">
          <Schools />
        </Route>
        <Route path="/schools/:id">
          <SchoolDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
