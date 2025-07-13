import type { ReactElement, ReactNode } from "react";

const SectionItem = ({ children }: { children: ReactNode }): ReactElement => (
	<div>{children}</div>
);

export default SectionItem;
