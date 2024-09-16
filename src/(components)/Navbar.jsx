"use client";

import Link from "next/link";
import { DownloadIcon, HistoryIcon, HelpIcon } from "../(assets)";
export const Navbar = () => {
  return (
    <div className="navbar">
      <p className="navbar-logo">
        <Link href="/" className="navbar-link">
          Astrology 2D
        </Link>
      </p>
      <ul className="navbar-links">
        <li>
          <Link href="/" className="navbar-link">
            <DownloadIcon />
          </Link>
        </li>
        <li>
          <Link href="/" className="navbar-link">
            <HelpIcon />
          </Link>
        </li>
        <li>
          <Link href="/history" className="navbar-link">
            <HistoryIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
};
