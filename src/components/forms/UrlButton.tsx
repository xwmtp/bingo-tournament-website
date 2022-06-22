import React from "react";
import { Button, ButtonLayoutProps } from "./Button";

interface Props extends ButtonLayoutProps {
  url?: string;
  sameTab?: boolean;
  className?: string;
}

export const UrlButton: React.FC<Props> = (props) => {
  return (
    <Button {...props} href={props.url} sameTab={props.sameTab} disabled={!props.url}>
      {props.children}
    </Button>
  );
};
