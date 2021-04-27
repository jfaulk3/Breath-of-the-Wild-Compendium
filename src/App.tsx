import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
