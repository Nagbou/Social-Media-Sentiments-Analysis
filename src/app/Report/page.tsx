import React from "react";
import styles from "./Report.module.css"
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
function Report() {
    return (
        <main className={styles.container}>
            <h1 className={styles.header}>Comprehensive Project Analysis Report</h1>
            <p className={styles.intro}>Delve into the comprehensive analysis of our project, where we present key findings, statistical insights, and valuable conclusions. This report highlights user behavior trends, sentiment analysis, and engagement metrics, providing a clear understanding of our research outcomes and their implications.</p>
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
            </div >

            {/* Second section */}
            <div className="row pt-5 pb-3 mt-5 ">
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

            {/* Third section */}
            <div className="row pt-5 pb-3 mt-5 ">
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
            {/* Fourthsection */}
            <div className="row pt-5 pb-1 mt-5 ">
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

            {/* ffth section */}
            <div className="row pt-5 pb-3 mt-5 ">
                <div className="col col-6">
                    <h2 className={styles.SectionHeader}>Temporal Analysis Across Social Media Platforms</h2>
                    <p className={styles.text}>
                        Our temporal analysis focuses on investigating trends over time using the "Timestamp" column to identify patterns, fluctuations, and recurring themes in social media content. We observed a remarkable growth in the number of sentiments across all platforms, increasing from just 2 in 2010 to nearly 200 by 2024. This dramatic rise indicates a diversification of emotional expression in social media discussions, reflecting a broader range of user experiences and sentiments.
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

                <p className={styles.text}>
                    Throughout this period, the most engaging sentiments have consistently been associated with happiness, encompassing emotions such as joy, excitement, gratitude, contentment, and positivity. These positive sentiments not only dominate in terms of frequency but also achieve the highest levels of interaction, as evidenced by likes and retweets. Interestingly, other emotions such as confusion and curiosity have also garnered above-average engagement, suggesting that users are increasingly interested in a variety of emotional experiences.
                    While certain sentiments like determination and accomplishment remain linked to enduring trends, most others have shown a noticeable upward trajectory in engagement over time. This shift highlights a growing inclination among users to connect with and share experiences that foster positivity and emotional well-being, suggesting that content that resonates with these sentiments may continue to thrive in the evolving landscape of social media.
                </p>
            </div>

            <div className="row pt-5 pb-3 mt-5 ">
                <div className="mb-5">
                    <h2 className={styles.SectionHeader}>Growth of Sentiments Over Time (2010 to 2024)</h2>
                    <p className={styles.text}>
                        Trend: The number of identifiable sentiments has expanded from 2 in 2010 to nearly 200 by 2024. This suggests an increasing diversity and granularity in how users express their emotions across platforms.
                    </p>
                    <p className={styles.text}>
                        Analysis: This growth is likely driven by the evolution of social media algorithms that better capture nuanced emotional expressions. As platforms expanded, users started sharing a broader range of feelings, from basic emotions like joy and sadness to more complex ones like confusion or creative inspiration.
                    </p>
                </div>
                <div className="mb-5">
                    <h2 className={styles.SectionHeader}>Happiness-Related Sentiments Dominate Engagement</h2>
                    <p className={styles.text}>
                        Trend: Sentiments related to happiness (joy, excitement, gratitude, contentment, and positivity) consistently attract the highest engagement (likes, retweets).
                    </p>
                    <p className={styles.text}>
                        Analysis: Positive content tends to evoke strong reactions, leading to more interactions, especially likes. People are more inclined to engage with uplifting content, which explains why these sentiments dominate. Additionally, confusion and curiosity, while less prevalent, still generate higher-than-average engagement, likely due to the intrigue and engagement they provoke in users.
                    </p>
                </div>
                <div className="mb-5">
                    <h2 className={styles.SectionHeader}>Enduring vs. Emerging Sentiment Trends</h2>
                    <p className={styles.text}>
                        Trend: Sentiments like determination and accomplishment are linked to permanent trends, while most other sentiments (e.g., joy, excitement) show an upward trajectory in engagement over time.
                    </p>
                    <p className={styles.text}>
                        Analysis: Determination and accomplishment reflect stable, long-term emotions associated with personal or professional success. Meanwhile, sentiments like joy and excitement become more engaging over time as content sharing becomes increasingly frequent and global, with more diverse and emotionally resonant content being shared across platforms.
                    </p>
                </div>
                <div className="mb-5">
                    <h2 className={styles.SectionHeader}>Diverse Sentiment Range in Different Countries</h2>
                    <p className={styles.text}>
                        Trend: The USA, UK, Canada, Australia, and India exhibit a wide range of diverse sentiments, while countries like France, Brazil, and Italy show fewer dominant emotions (typically 3-5).
                    </p>
                    <p className={styles.text}>
                        Analysis: In global contexts like the USA and UK, social media activity is more diverse, reflecting cultural and linguistic variety. Countries with fewer dominant emotions may be culturally more homogeneous in their social media interactions or may simply express fewer nuanced emotions online. For example, in France, sentiments like contentment and creative inspiration are prevalent, reflecting cultural values.
                    </p>
                </div>
                <div className="mb-5">
                    <h2 className={styles.SectionHeader}>Dominating Topics by Country</h2>
                    <p className={styles.text}>
                        Trend: While the USA, UK, Canada, and Australia show a wide variety of hashtags and topics, India has 4 dominant topics—travel, adventure, success, and accomplishment—whereas other countries exhibit fewer dominant topics (0-3).
                    </p>
                    <p className={styles.text}>
                        Analysis: India’s focus on travel, adventure, and success could be influenced by its growing middle class and emphasis on personal development and exploration. In contrast, countries with fewer dominant topics may have smaller social media user bases or engage in fewer specific thematic discussions.
                    </p>
                </div>
                <div className="mb-5">
                    <h2 className={styles.SectionHeader}>Engagement Patterns: Likes vs. Retweets</h2>
                    <p className={styles.text}>
                        Trend: Likes far outnumber retweets in engagement, with likes nearly doubling retweets (e.g., joy posts garner 1,087 retweets and 2,168 likes).
                    </p>
                    <p className={styles.text}>
                        Analysis: Likes are often a more passive form of engagement, while retweets indicate a higher level of personal investment in sharing content. This could explain why joy, excitement, and positivity receive more likes—they are feelings people resonate with, but they may not always feel compelled to share the content publicly.
                    </p>
                </div>
                <div className="mb-5">
                    <h2 className={styles.SectionHeader}>Most Engaging Years and Months</h2>
                    <p className={styles.text}>
                        Trend: Engagement peaks occurred in 2019 and 2023, especially in months 2, 6, 7, 8, and 9.
                    </p>
                    <p className={styles.text}>
                        Analysis: Major world events or cultural moments in these periods likely spurred higher social media activity, driving more engagement. Seasonal patterns (like summer months) might also explain the uptick, with users posting more content during vacations or holiday seasons.
                    </p>
                </div>
                <div className="mb-5">
                    <h2 className={styles.SectionHeader}>Engagement by Likes and Retweets Distribution</h2>
                    <p className={styles.text}>
                        Trend: Half of the posts fall within the range of 35-50 likes, with some posts reaching up to 70 likes. Posts generating this engagement are typically from 2019 and 2023 and linked to emotions like joy, happiness, peace, and energy. Retweets range from 18-30, mirroring these sentiments but with generally lower interaction.
                    </p>
                    <p className={styles.text}>
                        Analysis: This shows that users prefer expressing appreciation through likes rather than sharing posts, especially those that evoke positive emotions like joy and peace. Positive sentiment content tends to see the most interaction, possibly due to its broader appeal.
                    </p>
                </div>
                <h1 className={styles.header}>Final Thoughts</h1>
                <p className={styles.intro}>The landscape of sentiment analysis across social media showcases a dynamic and evolving interaction between emotions and engagement. Positive sentiments, particularly those linked to happiness, dominate global conversations, while emotions like confusion and curiosity are gaining traction as users seek deeper connections with content. Cultural and regional differences further influence emotional expression online, with some countries displaying a wide range of feelings, while others focus on specific dominant sentiments.
                    These trends illustrate that social media platforms have evolved from mere communication tools into complex emotional ecosystems. In this environment, both passive and active engagement reflect the collective mood and the shifting emotional landscape of the digital world, underscoring the importance of understanding user sentiment in today’s interconnected society.
                </p>
                <Link href="/">
                    <button className={styles.button}>
                        <FontAwesomeIcon icon={faHome} />
                    </button>
                </Link>
            </div>
        </main>
    )
}
export default Report