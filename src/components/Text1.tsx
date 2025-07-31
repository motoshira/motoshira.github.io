import type { ReactElement, ReactNode } from "react";

const Text2 = ({ children }: { children: ReactNode }): ReactElement => (
	<span className="text-sm md:text-lg">{children}</span>
);

export default Text2;
