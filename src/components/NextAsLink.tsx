import NextLink from "next/link";
import React from "react";

import { Link, LinkProps } from "@chakra-ui/next-js";
import { Url } from "next/dist/shared/lib/router/router";

interface NextAsLinkProps extends LinkProps {
  children?: React.ReactNode;
  href: Url;
}
const NextAsLink = ({ href, children, ...props }: NextAsLinkProps) => {
  return (
    <Link
      as={NextLink}
      href={href}
      _hover={{ textDecoration: "none" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NextAsLink;
