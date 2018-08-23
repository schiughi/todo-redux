import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import NavigationBar from "src/components/organisms/navigation-bar";
import Destinations from "src/containers/destinations-page";
import Home from "src/containers/home-page";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <React.Fragment>
          <NavigationBar>
            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
          </NavigationBar>

          <Route exact path="/" component={Home} />
          <Route path="/destinations" component={Destinations} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
