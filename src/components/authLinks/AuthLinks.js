'use client';

import React, { useState } from 'react';
import styles from './authLinks.module.css';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  const handleSignOut = () => {
    signOut();
    router.push('/');
  };
  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href="/login" className={styles.link}>
          {' '}
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            {' '}
            Write
          </Link>
          <span className={styles.link} onClick={handleSignOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/homepage">Homepage</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          {status === 'unauthenticated' ? (
            <Link href="/login"> Login</Link>
          ) : (
            <>
              <Link href="/write"> Write</Link>
              <span className={styles.link} onClick={handleSignOut}>
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
