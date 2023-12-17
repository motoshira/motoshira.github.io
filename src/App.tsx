import { useState } from "react";
import myLogo from "./assets/me.webp";

const Navigation = () => {
  return (
    <nav className="sticky top-0">
      <ul className="flex space-x-2">
        {[
          {
            name: "About",
            href: "/about",
          },
          {
            name: "Blog",
            href: "/blog",
          },
          {
            name: "Contact",
            href: "/contact",
          },
        ].map((item) => (
          <li>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

function App() {
  return (
    <div className="h-[100dvh] relative">
      <Navigation />
      <h1 className="text-2xl">motoshira.net</h1>
      <div>
        <img src={myLogo} className="logo react" alt="React logo" />
      </div>
    </div>
  );
}

export default App;
