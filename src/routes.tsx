import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages/home";
import Schools from "./pages/schools";
import SchoolDetails from "./pages/schoolDetails";

const queryClient = new QueryClient();

export const Routes = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};
