import { Url } from "next/dist/shared/lib/router/router";

export interface LinkProps {
  children: React.ReactNode;
  href: string | Url;
  target?: string;
  className?: string;
}
