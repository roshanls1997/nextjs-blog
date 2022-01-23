import Head from "next/head";
import Image from "next/image";
import styles from "./Layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Roshan Sahu";
export const siteTitle = "Next.js Sample Website";
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="learn how to build personal website using next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              src="/images/profile.jpeg"
              alt={name}
              height={144}
              width={144}
              className={utilStyles.borderCircle}
              priority
            />
            <h1 className={utilStyles.heading2XL}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpeg"
                  width={144}
                  height={144}
                  alt={name}
                  className={utilStyles.borderCircle}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a
                  className={`${utilStyles.colorInherit} ${utilStyles.anchorTag}`}
                >
                  {name}
                </a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a className={`${styles.backToHome} ${utilStyles.anchorTag}`}>
              &#8592;Back To Home
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
