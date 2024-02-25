import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/favorites">Favorites</Link>
      <Link href="/new">Add New Cocktails</Link>
    </nav>
  );
}
