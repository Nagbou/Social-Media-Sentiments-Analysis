import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import styles from './LandingPage.module.css';




function LandingPage() {

  return (
    <>
      <div className={`${styles.coverContainer} row`}>

        <div className='col col-3'>
          <div className={styles.headerContainer}>
            <h1 className={styles.coverHeader}>Social Media Sentiments Analysis</h1>
          </div>
        </div>
        <div className='col col-8'>
          <Image
            src="/imgs/about-4.jpg"
            alt="Cover"
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