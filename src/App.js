import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/footer" component={Footer} />

          <Route exact path="/body" component={Body} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
