"use client";

import Link from "next/link";
import { HistoryIcon, HelpIcon, DownloadIcon } from "../(assets)";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const t = useTranslations("Index");

  const pathname = usePathname();

  return (
    <div className="navbar">
      <p className="navbar-logo">
        <Link href="/" className="navbar-link">
          {t("pageTitle")}
        </Link>
      </p>
      <ul className="navbar-links">
        <li>
          <Link href={`${pathname}/download`} className="navbar-link">
            <DownloadIcon />
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/help`} className="navbar-link">
            <HelpIcon />
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/history`} className="navbar-link">
            <HistoryIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
};
