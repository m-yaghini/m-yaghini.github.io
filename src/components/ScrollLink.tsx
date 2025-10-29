import * as React from "react";
import Link from '@material-ui/core/Link'
import { useSmartScroll } from "./SmartScrollContext";

type ScrollLinkProps = {
  to: string; // the id you pass to smartScroll, e.g. "pol"
  smartScroll: (id: string) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  underline?: "none" | "hover" | "always";
  color?: string;
};

export default function ScrollLink({ to, children, ...rest }: { to: string; children: React.ReactNode; }) {
  const smartScroll = useSmartScroll();
  return (
    <Link
      component="span"
      onClick={() => smartScroll(to)}
      style={{ cursor: "pointer" }}
      {...rest}
    >
      {children}
    </Link>
  );
}