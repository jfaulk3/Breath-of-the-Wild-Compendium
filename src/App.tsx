import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Category from "./Category";
import Entries from "./Entries";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact={true} path="/category">
          <Category />
        </Route>
        <Route
          path={[
            "/category/:categoryName",
            "/category/:categoryName/:foodType",
          ]}
        >
          <Entries />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
