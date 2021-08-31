import { Route, Switch } from "react-router-dom";
import About from "../src/pages/About";
import Booking from "./pages/Booking";
import Treatments from "./pages/Treatments";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Switch>
      <Route path="/" component={About} exact />
      <Route path="/treatments" component={Treatments} exact />
      <Route path="/booking" component={Booking} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/pricing" component={Pricing} exact />
    </Switch>
  );
}

export default App;
