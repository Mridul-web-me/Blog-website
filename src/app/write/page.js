'use client';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import Image from 'next/image';
import styles from './writePage.module.css';
import { useEffect, useState } from 'react';
import { FaImage, FaMinus, FaPlus } from 'react-icons/fa';
import { GoVideo } from 'react-icons/go';
import { MdDriveFolderUpload } from 'react-icons/md';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { app } from '../utils/firebase';
import FileUploadPopup from './FileUploadPopup';
import { CircularProgressbar } from 'react-circular-progressbar';

const storage = getStorage(app);

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const { data, status } = useSession();
  const [value, setValue] = useState('');
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState('');
  const [title, setTitle] = useState('');
  const [catSlug, setCatSlug] = useState('');
  const [progress, setProgress] = useState(0);

  const router = useRouter();
  if (status === 'loading') {
    return <div className={styles.loading}>Loadong.....</div>;
  }
  if (status === 'unauthenticated') {
    router.push('/');
  }

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        snapshot => {
          const newProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(newProgress); // Update progress state
          console.log('Upload is ' + newProgress + '% done');

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },

        error => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  const slugify = str =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

  const handleSubmit = async () => {
    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || ''
      })
    });

    console.log(res);
    if (res.statusText === 'OK') {
      window.alert('submited');
      setValue('');
      setMedia('');
      setTitle('');
      setCatSlug('');
    }
  };

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} onChange={e => setTitle(e.target.value)} />
      <select className={styles.select} onChange={e => setCatSlug(e.target.value)} required>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          {open ? <FaMinus className={styles.svgButton} /> : <FaPlus className={styles.svgButton} />}
        </button>
        {open && (
          <div className={styles.add}>
            <input style={{ display: 'none' }} type="file" id="image" onChange={e => setFile(e.target.files[0])} />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <FaImage className={styles.svgButton} />
              </label>
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
      {file && <p>{progress !== 100 ? <CircularProgressbar value={progress} className={styles.progressBar} /> : 'Upload complete!'}</p>}

      <ReactQuill className={styles.textArea} theme="snow" value={value} onChange={setValue} placeholder="Write here......." />
      <div className={styles.submit}>
        <button className={styles.publish} onClick={handleSubmit}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default WritePage;
