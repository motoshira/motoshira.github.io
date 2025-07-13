import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElm = document.getElementById("root");
if (rootElm) {
	ReactDOM.createRoot(rootElm).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}
