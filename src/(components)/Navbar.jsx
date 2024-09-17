"use client";

import Link from "next/link";
import { HistoryIcon, HelpIcon, DownloadIcon } from "../(assets)";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const t = useTranslations("Index");

  const pathname = usePathname();

  const withoutHistory = pathname.includes("history");
  const withoutInstall = pathname.includes("install");

  const locale = pathname.split("/")[1];

  return (
    <div className="navbar">
      <p className="navbar-logo">
        <Link href="/" className="navbar-link">
          {t("pageTitle")}
        </Link>
      </p>
      <ul className="navbar-links">
        {!withoutInstall && (
          <li>
            <Link
              href={`/${locale}/install`}
              replace={true}
              className="navbar-link"
            >
              <DownloadIcon />
            </Link>
          </li>
        )}
        {!withoutHistory && (
          <li>
            <Link
              href={`/${locale}/history`}
              className="navbar-link history-link"
            >
              <HistoryIcon />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
