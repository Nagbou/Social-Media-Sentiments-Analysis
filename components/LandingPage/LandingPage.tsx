import React from 'react';
import Image from 'next/image';
import styles from './LandingPage.module.css';

function LandingPage() {
  return (
    <>
      <div className={`${styles.coverContainer} row`}>
        <div className='col col-md-3 col-12'>
          <div className={styles.headerContainer}>
            <h1 className={styles.coverHeader}>Social Media Sentiments Analysis</h1>
          </div>
        </div>
        <div className='col col-md-8 col-12'>
          <Image
            src="/imgs/about-4.jpg"
            alt="Cover image representing social media sentiment analysis"
            className={styles.coverImg}
            width={200}
            height={50}
          />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
