"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import sytles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav className={sytles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link> {path === "/" ? "O" : ""}
        </li>
        <li>
          <Link href='/about-us'>About Us</Link> {path === "/about-us" ? "O" : ""}
        </li>
        <li>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}
