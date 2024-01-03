import Menu from '@/components/menu/Menu';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>02.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque quo labore, ut velit laudantium placeat exercitationem accusamus amet. Doloremque aspernatur pariatur error, vel maiores aliquam sint assumenda sit aut.</p>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque quo labore, ut velit laudantium placeat exercitationem accusamus amet. Doloremque aspernatur pariatur error, vel maiores aliquam sint assumenda sit aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque quo labore, ut velit laudantium placeat exercitationem accusamus amet. Doloremque aspernatur pariatur error, vel maiores aliquam sint assumenda sit aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque quo labore, ut velit laudantium placeat exercitationem accusamus amet. Doloremque aspernatur pariatur error, vel maiores aliquam sint assumenda sit aut.</p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
