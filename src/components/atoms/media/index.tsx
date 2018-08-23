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
const Img = mediaFactory("img");
const Container = mediaFactory("container");

export { Body, Img, Container };
