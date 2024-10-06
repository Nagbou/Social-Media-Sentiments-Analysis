import React from "react";
import styles from "./Report.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Report() {
    return (
        <main className={styles.container}>
            <h1 className={styles.header}>Comprehensive Project Analysis Report</h1>
            <p className={styles.intro}>
                Delve into the comprehensive analysis of our project, where we present key findings, statistical insights, and valuable conclusions. This report highlights user behavior trends, sentiment analysis, and engagement metrics, providing a clear understanding of our research outcomes and their implications.
            </p>
            <Link href="/" className={styles.homeLink}>
                <FontAwesomeIcon icon={faHome} /> Home
            </Link>

            {/* First Section */}
            <section className="row pt-5 pb-3">
                <div className="col col-6">
                    <h2 className={styles.SectionHeader}>User Engagement Analysis through Likes and Retweets</h2>
                    <p className={styles.text}>
                        In our analysis of user engagement on social media platforms, we focused on the "Likes" and "Retweets" metrics, which revealed valuable insights into user preferences and popular content. We observed a significant disparity in engagement levels, with total likes reaching approximately 31,000 compared to 16,000 retweets. This trend indicates that users are more inclined to express appreciation through likes rather than retweets, emphasizing the need for content that resonates emotionally with the audience. Notably, themes such as joy, excitement, and positive contentment emerged as the most engaging topics.
                    </p>
                </div>
                <div className={`${styles.imgContainer} col col-5`}>
                    <Image
                        src="/imgs/pb-1.jpg"
                        alt="User Engagement Analysis"
                        className={styles.img}
                        width={200}
                        height={100}
                    />
                </div>
            </section>

            {/* Repeat the pattern for subsequent sections */}
            <section className="row pt-5 pb-3">
                <div className={`${styles.imgContainer} col col-5`}>
                    <Image
                        src="/imgs/pb-2.jpg"
                        alt="Positive Sentiment Posts"
                        className={styles.img}
                        width={200}
                        height={50}
                    />
                </div>
                <div className="col col-6">
                    <p className={styles.text}>
                        We found that posts centered around positive sentiments, particularly joy, garnered substantial interactions...
                    </p>
                </div>
            </section>

            {/* More sections... */}

            {/* Add a conclusion or summary section at the end */}
            <section className="row pt-5 pb-3 mt-5">
                <h2 className={styles.SectionHeader}>Conclusion</h2>
                <p className={styles.text}>
                    This report has highlighted key trends in user engagement and sentiment analysis across social media platforms...
                </p>
            </section>
        </main>
    );
}

export default Report;
