"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { LinkProps } from "./Link.types";

const Link = (props: LinkProps) => {
  const { href, children, className, target } = props;
  const pathname = usePathname();
  return (
    <NextLink target={target} href={href} className={className}>
      {children}
    </NextLink>
  );
};

export default Link;
