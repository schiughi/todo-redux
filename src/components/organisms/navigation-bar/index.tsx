import * as React from "react";

import AppBar from "react-toolbox/lib/app_bar";
import Navigation from "react-toolbox/lib/navigation";

export interface NavigationBarProps {
  children: React.ReactNode[];
}

const NavigationBar: React.StatelessComponent<NavigationBarProps> = ({
  children
}: NavigationBarProps) => (
  <AppBar title="final destination" leftIcon="menu">
    <Navigation type="horizontal">{children}</Navigation>
  </AppBar>
);

export default NavigationBar;
