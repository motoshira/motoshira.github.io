import type { ReactElement, ReactNode } from "react";

interface Props {
	href: string;
	children: ReactNode;
}

const LinkWrap = ({ href, children }: Props): ReactElement => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="hover:opacity-70"
		>
			{children}
		</a>
	);
};

export default LinkWrap;
