import { Route, Switch } from "react-router-dom";
import About from "../src/pages/About"

function App() {
  return (
    <Switch>
      <Route path="/" component={About} exact />
      {/* <Route path="/treatments" component={Treatments} exact />
      <Route
        path="/booking"
        component={Booking}
        exact
      />
      <Route
        path="/contact"
        component={Contact}
        exact
      /> */}
    </Switch>
  );
}

export default App;
