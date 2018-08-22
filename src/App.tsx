import * as React from "react";
import Button from "src/components/atoms/Button";
import * as style from "./App.css";
import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    return (
      <div className={style.App}>
        <header className={style.AppHeader}>
          <img src={logo} className={style.AppLogo} alt="logo" />
          <h1 className={style.AppTitle}>Welcome to React</h1>
        </header>
        <p className={style.AppIntro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button onClick={this.caution}>default</Button>

        <Button priority="primary" onClick={this.caution}>
          primary
        </Button>
      </div>
    );
  }

  private caution() {
    alert("aaaaaaaaaaaaa");
  }
}

export default App;
