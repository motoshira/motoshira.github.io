import { Metadata } from "next";
import React from "react";

import "./globals.css";

export const dynamic = "force-static";

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
			<body>
				<div id="root">{children}</div>
			</body>
		</html>
	);
}
