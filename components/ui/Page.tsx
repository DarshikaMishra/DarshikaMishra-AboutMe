import React from "react";

import styles from "@/components/ui/Page.module.css";
import Link from "next/link";

export type PageProps = {
  children: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return (
    <div className={styles.page}>
      <div className={styles.contentWrapper}>
        <nav className=" flex w-full fixed top-0 left-0 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <Link className="text-lg font-semibold text-gray-900" href="/">
              Home
            </Link>
          </div>
          <div className="max-w-6xl mx-auto px-4 py-3">
            <a
              className="text-lg font-semibold text-gray-900"
              href="/experience"
            >
              Experiences
            </a>
          </div>
          <div className="max-w-6xl mx-auto px-4 py-3">
            <a className="text-lg font-semibold text-gray-900" href="/project">
              Projects
            </a>
          </div>
        </nav>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};
