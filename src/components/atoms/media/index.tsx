import classNames from "classnames";
import * as React from "react";
import * as styles from "./styles.css";

export interface MediaProps {
  children: React.ReactNode;
  className?: string;
  tag?: string;
}

function mediaFactory(name: string) {
  return ({ children, tag: Tag = "div", className }: MediaProps) => (
    <Tag className={classNames(styles[name], className)}>{children}</Tag>
  );
}

const Body = mediaFactory("body");
const Headig = mediaFactory("heading");
const Container = mediaFactory("container");

export { Body, Headig, Container };
