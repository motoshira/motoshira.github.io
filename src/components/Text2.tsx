import type { ReactElement, ReactNode } from "react";

const Text2 = ({ children }: { children: ReactNode }): ReactElement => (
	<span className="text-xs md:text-base">{children}</span>
);

export default Text2;
