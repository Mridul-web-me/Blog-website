import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="BTech" width={50} height={50} />
          <h1 className={styles.logoText}>BTech</h1>
        </div>
        <p className={styles.desc}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde modi laudantium repellat eligendi illo qui, magnam ab amet iusto quis tenetur corporis repellendus voluptatum fugit. Enim quas quo culpa similique.</p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
          <Image src="/tiktok.png" alt="Tiktok" width={24} height={24} />
          <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
