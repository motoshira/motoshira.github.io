import React from 'react';

const Heading1 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-gray-600 lg:text-4xl">{children}</h2>
);

export default Heading1;
