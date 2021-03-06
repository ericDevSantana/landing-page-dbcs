import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import constructionPic from "../public/construction.jpg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dynamic Black Car Service</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Black Car Service" />
        <meta property="og:url" content="www.dynamicbsc.com" />
      </Head>

      <nav className={styles.nav}>
        <h1>DYNAMIC BLACK CAR SERVICE</h1>
      </nav>

      <main className={styles.main}>
        <Image layout="intrinsic" src={constructionPic} />
      </main>

      <footer className={styles.footer}>
        <div className={styles["footer-misc"]}>
          <div className={styles["footer-misc-social"]}>
            <h2>Follow us</h2>
            <a href="https://www.instagram.com/dynamicblackcar/">Instagram</a>
            <a href="https://twitter.com/dynamicblackcar">Twitter</a>
            <a>Facebook</a>
          </div>
          <div className={styles["footer-misc-section"]}>
            <h2>Other links</h2>
            <a href="https://www.freepik.com/vectors/background">Art</a>
          </div>
          <div className={styles["footer-misc-contact"]}>
            <div>
              <h2>Contact us</h2>
              <div className={styles["phone-number"]}>
                <p>Phone Number: (415) 767-6551</p>
              </div>
              <div className={styles["phone-number"]}>
                <p>E-mail: dynamicblackcar@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className={styles["footer-foot-note"]}>
          © 2021 Dynamic Black Car Service. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
