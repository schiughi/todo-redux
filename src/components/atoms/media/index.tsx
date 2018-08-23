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

const Content = mediaFactory("content");
const Avatar = mediaFactory("avatar");
const Action = mediaFactory("action");
const Container = mediaFactory("container");

export { Content, Avatar, Action, Container };
