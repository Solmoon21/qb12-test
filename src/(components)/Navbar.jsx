"use client";

import Link from "next/link";
import { HistoryIcon, HelpIcon } from "../(assets)";
import { useTranslations } from "next-intl";

export const Navbar = () => {
  const t = useTranslations("Index");

  return (
    <div className="navbar">
      <p className="navbar-logo">
        <Link href="/" className="navbar-link">
          {t("pageTitle")}
        </Link>
      </p>
      <ul className="navbar-links">
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
