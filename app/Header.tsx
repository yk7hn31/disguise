"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { BackIcon } from "./icons";

type HeaderProps = {
  title?: string;
  action?: string;
  backHref?: string;
};

export default function Header({ title, action, backHref }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      {backHref ? (
        <Link href={backHref} transitionTypes={["nav-back"]} className={styles.back} aria-label="뒤로 가기">
          <BackIcon />
        </Link>
      ) : (
        <button className={styles.back} aria-label="뒤로 가기">
          <BackIcon />
        </button>
      )}
      {title && <h1 className={styles.title}>{title}</h1>}
      {action && <button className={styles.manage}>{action}</button>}
    </header>
  );
}
