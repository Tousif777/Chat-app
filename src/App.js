import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/contact" component={Footer} />

          <Route exact path="/service" component={Body} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
