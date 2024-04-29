import React from 'react';

const Heading1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-2xl font-bold text-gray-600 lg:text-4xl">{children}</h1>
);

export default Heading1;
