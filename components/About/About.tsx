import React from "react";
import styles from "./About.module.css";
import Image from 'next/image';

function About() {
    return (
        <>
            <h1 className={styles.header}>Unveiling the Power of Social Media Sentiment Analysis for Business Growth</h1>
            <div className="row pt-5 pb-3">
                <div className="col col-8">
                    <p className={styles.text}>
                        In today's digital world, understanding user behavior on social media is crucial for businesses, marketers, and decision-makers. Social media platforms provide valuable insights into consumer sentiment, preferences, and engagement patterns, which can shape marketing strategies, product development, and customer relations. By analyzing user engagement through likes, retweets, and other metrics, businesses can identify popular content and gain a deeper understanding of their audience’s needs.
                    </p>
                </div>
                <div className="col col-3">
                    <Image
                        src="/imgs/about-2.jpg"
                        alt="Cover"
                        className={styles.img}
                        width={200}
                        height={100}
                        priority // Adding priority for better image loading in above-the-fold content
                    />
                </div>
            </div>

            <div className="row pt-5 pb-3">
                <div className="col col-3">
                    <Image
                        src="/imgs/about-6.jpg"
                        alt="Cover"
                        className={styles.img}
                        width={200}
                        height={50}
                        priority // Adding priority for better image loading in above-the-fold content
                    />
                </div>
                <div className="col col-8">
                    <p className={styles.text}>
                        Platform-specific analysis helps reveal variations in user behavior across different social media channels, allowing brands to tailor their messages for maximum impact. Similarly, analyzing trending hashtags and sentiment distribution across geographic regions provides insights into regional preferences and cultural trends, helping businesses target specific markets more effectively.
                    </p>
                </div>
            </div>

            <div className="row pt-5 pb-3">
                <div className="col col-8">
                    <p className={styles.text}>
                        Temporal analysis further enhances these insights by identifying recurring themes, sentiment fluctuations, and trends over time, enabling businesses to adapt to changing consumer moods and capitalize on emerging opportunities. Through this project, which combines user engagement data, sentiment analysis, and cross-platform trends, businesses can unlock new opportunities for growth, connect with their audiences on a deeper level, and make informed decisions based on real-time user sentiment.
                    </p>
                </div>
                <div className="col col-3">
                    <Image
                        src="/imgs/about-7.jpg"
                        alt="Cover"
                        className={styles.img}
                        width={200}
                        height={50}
                        priority // Adding priority for better image loading in above-the-fold content
                    />
                </div>
            </div>
        </>
    );
}

export default About;
