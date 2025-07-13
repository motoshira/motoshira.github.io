import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "motoshira.net",
	description:
		"motoshira.net はソフトウェアエンジニア motoshira のサイトです。",
	icons: "/favicon.png",
	openGraph: {
		title: "motoshira.net",
		description:
			"motoshira.net はソフトウェアエンジニア motoshira のサイトです。",
		url: "https://www.motoshira.net/",
		siteName: "motoshira.net",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;300;400;500;700;800;900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<div id="root">{children}</div>
			</body>
		</html>
	);
}
