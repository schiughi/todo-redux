import * as React from "react";
import Button from "src/components/atoms/button";

export interface PlayButtonProps {
  playing: boolean;
  onClick: (e: any) => void;
  className?: string;
}

const PlayButton: React.StatelessComponent<PlayButtonProps> = ({
  playing,
  ...props
}) => (
  <Button
    icon={playing ? "pause_circle_outline" : "play_circle_outline"}
    floating
    {...props}
  />
);

export default PlayButton;
