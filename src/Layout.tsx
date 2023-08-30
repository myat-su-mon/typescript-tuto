import React, { ReactNode } from "react";

interface ChildrenType {
  children: React.ReactNode;
}

const Layout = ({ children }: ChildrenType) => {
  return <div>{children}</div>;
};

export default Layout;
