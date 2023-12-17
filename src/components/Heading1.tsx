import React from "react";

const Heading1 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl lg:text-4xl font-bold text">{children}</h2>
);

export default Heading1;
