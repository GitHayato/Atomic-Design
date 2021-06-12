import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../src/components/pages/Top";
import { Users } from "../src/components/pages/Users";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
