import * as React from "react";
import Base from "react-toolbox/lib/font_icon";

export interface IconProps {
  value: string;
}

const Icon: React.SFC<IconProps> = ({ value }) => <Base value={value} />;

export default Icon;
