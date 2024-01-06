'use client';

import Image from 'next/image';
import styles from './writePage.module.css';
import { useState } from 'react';
import { FaImage, FaMinus, FaPlus } from 'react-icons/fa';
import { GoVideo } from 'react-icons/go';
import { MdDriveFolderUpload } from 'react-icons/md';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const { data, status } = useSession();
  console.log(data, status);
  const router = useRouter();
  if (status === 'loading') {
    return <div className={styles.loading}>Loadong.....</div>;
  }
  if (status === 'authenticated') {
    router.push('/');
  }
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          {open ? <FaMinus className={styles.svgButton} /> : <FaPlus className={styles.svgButton} />}
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <FaImage className={styles.svgButton} />
            </button>
            <button className={styles.addButton}>
              <MdDriveFolderUpload className={styles.svgButton} />
            </button>
            <button className={styles.addButton}>
              <GoVideo className={styles.svgButton} />
            </button>
          </div>
        )}
      </div>
      <ReactQuill className={styles.textArea} theme="snow" value={value} onChange={setValue} placeholder="Write here......." />
      <div className={styles.submit}>
        <button className={styles.publish}>Publish</button>
      </div>
    </div>
  );
};

export default WritePage;
