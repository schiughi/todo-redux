import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import NavigationBar from "src/components/organisms/navigation-bar";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class App extends React.Component {
  public render() {
    return (
      <Router>
        <React.Fragment>
          <NavigationBar>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </NavigationBar>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
