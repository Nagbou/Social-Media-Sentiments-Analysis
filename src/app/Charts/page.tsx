import React from 'react';
import styles from "./Charts.module.css";
import Bars from '../../../components/Bars/Bars';
import PieChartComponent from '../../../components/Pie/Pie';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Lines from '../../../components/Lines/Lines';

function Charts() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Explore Real-Time Data Visualizations</h1>
            <p className={styles.intro}>
                Discover interactive charts that enhance your understanding of features and data insights.
            </p>

            {/* by platform */}
            <div className="row pt-5">
                <div className={`${styles.barsContainer} col col-5`}>
                    <h3 className='mb-4'>Total Interactions by Platform</h3>
                    <Bars
                        xaxis="platform"
                        bar1="total_likes"
                        bar2="total_retweets"
                        csvpath="/imgs/tables/sum_of_likes_retweets_by_platform.csv"
                    />
                </div>
                <div className={`${styles.barsContainer} ms-5 col col-6`}>
                    <h3 className='mb-4'>Sample Count by Platform</h3>
                    <PieChartComponent
                        dataKey="value"
                        nameKey='platform'
                        csvpath="/imgs/tables/number_posts_by_platform.csv"
                    />
                </div>
            </div>

            {/* by country */}
            <div className="row mt-5">
                <div className={`${styles.barsContainer} col col-7`}>
                    <h3 className='mb-4'>Total Interactions by Country</h3>
                    <Bars
                        xaxis="country"
                        bar1="total_likes"
                        bar2="total_retweets"
                        csvpath="/imgs/tables/sum_of_likes_retweets_by_country.csv"
                    />
                </div>
                <div className={`${styles.barsContainer} ms-4 col col-4`}>
                    <h3 className='mb-4'>Sample Count by Country</h3>
                    <PieChartComponent
                        dataKey="value"
                        nameKey='Country'
                        csvpath="/imgs/tables/number_posts_by_country.csv"
                    />
                </div>
            </div>

            {/* by year */}
            <div className="row pt-5">
                <div className={`${styles.barsContainer} col col-5`}>
                    <h3 className='mb-4'>Percentage of Samples by Year</h3>
                    <PieChartComponent
                        dataKey="value"
                        nameKey='year'
                        csvpath="/imgs/tables/number_posts_by_year.csv"
                    />
                </div>
                <div className={`${styles.barsContainer} ms-5 col col-6`}>
                    <h3 className='mb-4'>Total Interactions by Year</h3>
                    <Bars
                        xaxis="year"
                        bar1="total_likes"
                        bar2="total_retweets"
                        csvpath="/imgs/tables/sum_of_likes_retweets_by_year.csv"
                    />
                </div>
                <div className="row mt-5">
                    <div className={`${styles.barsContainer} ms-4 col col-11`}>
                        <h3 className='mb-4'>Interaction Progression by Year</h3>
                        <Lines
                            xaxis="year"
                            line1="total_likes"
                            line2="total_retweets"
                            csvpath="/imgs/tables/likes_retweets_by__date.csv"
                        />
                    </div>
                </div>
            </div>

            {/* by sentiment */}
            <div className="row pt-5">
                <div className={`${styles.barsContainer} ms-4 col col-11`}>
                    <h3 className='mb-4'>Total Interactions by Sentiment</h3>
                    <Bars
                        xaxis="sentiment"
                        bar1="total_likes"
                        bar2="total_retweets"
                        csvpath="/imgs/tables/sum_of_likes_retweets_by_sentiment.csv"
                    />
                </div>
            </div>

            <Link href="/">
                <button className={styles.button}>
                    <FontAwesomeIcon icon={faHome} />
                </button>
            </Link>
        </div>
    );
}

export default Charts;
