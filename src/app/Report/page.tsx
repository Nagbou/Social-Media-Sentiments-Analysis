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

            {/* First Section */}
            <div className="row pt-5 pb-3">
                <div className="col col-6">
                    <h2 className={styles.SectionHeader}>User Engagement Analysis through Likes and Retweets</h2>
                    <p className={styles.text}>
                        In our analysis of user engagement on social media platforms, we focused on the "Likes" and "Retweets" metrics, which revealed valuable insights into user preferences and popular content. We observed a significant disparity in engagement levels, with total likes reaching approximately 31,000 compared to 16,000 retweets. This trend indicates that users are more inclined to express appreciation through likes rather than retweets, emphasizing the need for content that resonates emotionally with the audience. Notably, themes such as joy, excitement, and positive contentment emerged as the most engaging topics.
                    </p>
                </div>
                <div className={`${styles.imgContainer} col col-5`}>
                    <Image
                        src="/imgs/pb-1.jpg"
                        alt="Cover"
                        className={styles.img}
                        width={200}
                        height={100}
                    />
                </div>
            </div>

            <div className="row pt-5 pb-3">
                <div className={`${styles.imgContainer} col col-5`}>
                    <Image
                        src="/imgs/pb-2.jpg"
                        alt="Cover"
                        className={styles.img}
                        width={200}
                        height={50}
                    />
                </div>
                <div className="col col-6">
                    <p className={styles.text}>
                        We found that posts centered around positive sentiments, particularly joy, garnered substantial interactions. For example, posts reflecting joy achieved 1,087 likes and 2,168 retweets, highlighting the emotional appeal of such content. Importantly, the cumulative sum of retweets for various posts never surpassed the total likes, reinforcing the notion that likes serve as a stronger indicator of user engagement. This pattern suggests that creating uplifting content is key to maximizing interactions on social media.
                    </p>
                </div>
            </div>

            <div className="row pt-5 pb-3">
                <div className="col col-6">
                    <p className={styles.text}>
                        Our temporal analysis revealed that the majority of interactions occurred in the years 2019 and 2023, with notable peaks in specific months—February, August, June, and September. Approximately 50% of posts achieved a like count within the range of 35 to 50, with some reaching up to 70 likes. This trend indicates a robust response to content centered on sentiments of joy, happiness, peace, and energy. In contrast, retweets displayed a lower range, with most interactions falling between 18 and 30. These findings highlight the importance of understanding user sentiment in shaping effective social media strategies.
                    </p>
                </div>
                <div className={`${styles.imgContainer} col col-5`}>
                    <Image
                        src="/imgs/pb-3.jpg"
                        alt="Cover"
                        className={styles.img}
                        width={200}
                        height={50}
                    />
                </div>
            </div>

            {/* Second Section */}
            <div className="row pt-5 pb-3 mt-5">
                <div className={`${styles.imgContainer} col col-5`}>
                    <Image
                        src="/imgs/pb-4.jpg"
                        alt="Cover"
                        className={styles.img}
                        width={200}
                        height={100}
                    />
                </div>
                <div className="col col-6">
                    <h2 className={styles.SectionHeader}>Exploring Sentiment Variations Across Social Media Platforms</h2>
                    <p className={styles.text}>
                        In our platform-specific analysis, we examined the variations in content across different social media platforms using the "Platform" column to understand how sentiments differ across these channels. We found that the total count of sentiments was highest for positivity at 45, followed by joy and excitement. Additionally, the average count of sentiments mirrored this trend, with positivity leading at an average of 15. Instagram emerged as the platform with the highest sentiment count at 258, accounting for 35.25% of the total, followed closely by Twitter at 243 and Facebook at 231. Our analysis revealed that the top five sentiments across all platforms are closely linked to "happiness," encompassing emotions such as joy, excitement, gratitude, contentment, and positivity. These sentiments not only dominate in terms of count but also drive the highest levels of engagement, as measured by likes and retweets, highlighting their role as the most interactive sentiments across social media.
                    </p>
                </div>
            </div>

            {/* Third Section */}
            <div className="row pt-5 pb-3 mt-5">
                <div className="col col-6">
                    <h2 className={styles.SectionHeader}>Exploring Hashtag Trends Across Social Media Platforms</h2>
                    <p className={styles.text}>
                        In our analysis of hashtag trends, we identified popular topics and themes by examining the "Hashtags" column, uncovering recurring hashtags that reflect prevalent sentiments within social media discussions. These hashtags collectively convey themes of exploration, adventure, and a sense of unity and connection forged through shared experiences. Notable hashtags such as #wonder, #stargazingAdventure, #carnivalEscapade, and #scalingPeaks evoke a spirit of discovery and adventure, encouraging users to embrace new experiences, whether in natural settings or engaging activities.
                    </p>
                </div>
                <div className={`${styles.imgContainer} col col-5`}>
                    <Image
                        src="/imgs/pb-5.jpg"
                        alt="Cover"
                        className={styles.img}
                        width={200}
                        height={100}
                    />
                </div>

                <p className={styles.text}>
                    Furthermore, hashtags like #harmony, #musicalUnity, #compassionate, and #proud highlight feelings of togetherness and cooperation. These sentiments resonate particularly well in creative and emotional contexts, illustrating the power of social media to foster connections among users. By analyzing these hashtags, we gain insights into the collective consciousness of social media users, emphasizing the importance of community and shared experiences in today’s digital landscape.
                </p>
            </div>

            {/* Fourth Section */}
            <div className="row pt-5 pb-1 mt-5">
                <div className="col col-5 mt-3">
                    <Image
                        src="/imgs/world-map-2.jpg"
                        alt="Cover"
                        className={styles.img}
                        width={200}
                        height={100}
                    />
                </div>
                <div className="col col-6">
                    <h2 className={styles.SectionHeader}>Geographical Analysis</h2>
                    <p className={styles.text}>
                        In our geographical analysis, we explored content distribution based on the "Country" column to understand regional variations in sentiment and topic preferences. Our findings indicate that countries such as the USA, UK, Canada, Australia, and India exhibit a broad spectrum of diverse sentiments, showcasing a rich tapestry of emotional expressions across social media. In contrast, countries like France, Brazil, and Italy tend to display 3 to 5 dominant emotions, highlighting a more focused emotional landscape. For example, common sentiments in France include contentment, creative inspiration, desolation, and desperation, reflecting the unique cultural and social context of the region.
                    </p>
                </div>
            </div>

            <div className="row pt-5 pb-3">
                <div className="col col-6">
                    <p className={styles.text}>
                        While the USA, UK, Canada, and Australia show a variety of hashtags and topics, India stands out with only four predominant themes: travel, adventure, success, and accomplishment. Other countries typically have between zero to three dominant topics, suggesting that certain regions may have more concentrated interests and emotional expressions. This analysis underscores the importance of understanding geographical sentiment trends, as it enables businesses and organizations to tailor their content strategies to resonate with regional preferences and foster deeper connections with their audiences.
                    </p>
                </div>
                <div className={`${styles.imgContainer} col col-5`}>
                    <Image
                        src="/imgs/pb-6.jpg"
                        alt="Cover"
                        className={styles.img}
                        width={200}
                        height={50}
                    />
                </div>
            </div>

            {/* Fifth Section */}
            <div className="row pt-5 pb-3 mt-5">
                <div className="col col-6">
                    <h2 className={styles.SectionHeader}>Temporal Analysis Across Social Media Platforms</h2>
                    <p className={styles.text}>
                        Our temporal analysis focuses on investigating trends over time, utilizing the "Date" column to identify key moments that influenced sentiment and engagement levels. We observed that certain dates correspond to spikes in interactions, which can often be attributed to events, campaigns, or specific content that resonated with users. This approach highlights the necessity of analyzing temporal patterns in user behavior to create timely and relevant content strategies that align with audience preferences.
                    </p>
                </div>
                <div className={`${styles.imgContainer} col col-5`}>
                    <Image
                        src="/imgs/pb-7.jpg"
                        alt="Cover"
                        className={styles.img}
                        width={200}
                        height={100}
                    />
                </div>
            </div>

            <div className="row pt-5 pb-3">
                <div className="col col-6">
                    <p className={styles.text}>
                        Furthermore, understanding temporal trends allows organizations to adapt their content and engagement strategies dynamically. By leveraging data analytics to recognize the timing of user interactions, brands can optimize their social media presence, ensuring that content reaches audiences when they are most receptive. This adaptability will ultimately lead to improved user engagement and strengthened brand loyalty, essential elements for success in the ever-evolving digital landscape.
                    </p>
                </div>
                <div className={`${styles.imgContainer} col col-5`}>
                    <Image
                        src="/imgs/pb-8.jpg"
                        alt="Cover"
                        className={styles.img}
                        width={200}
                        height={100}
                    />
                </div>
            </div>

            <footer className={styles.footer}>
                <Link href="/">
                    <FontAwesomeIcon icon={faHome} className={styles.homeIcon} />
                    Back to Home
                </Link>
            </footer>
        </main>
    );
}

export default Report;
