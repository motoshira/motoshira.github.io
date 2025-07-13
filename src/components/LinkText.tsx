import type { ReactElement, ReactNode } from "react";
import Text1 from "@/components/Text1";

interface Props {
	href: string;
	children: ReactNode;
}

const LinkText = ({ href, children }: Props): ReactElement => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="text-blue-400 underline decoration-2 hover:opacity-70"
		>
			<Text1>{children}</Text1>
		</a>
	);
};

export default LinkText;
