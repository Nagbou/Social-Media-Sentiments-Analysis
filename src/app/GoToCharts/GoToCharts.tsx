import Link from "next/link";
import styles from "./GoToCharts.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type GoToChartsProps = {
    link: string; // The link to navigate to
    header: string; // Header text
    text: string; // Additional text
}

function GoToCharts(prop: GoToChartsProps) {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{prop.header}</h1>
            <p>{prop.text}</p>
            <Link href={prop.link}> {/* Use curly braces here for dynamic link */}
                <button className={styles.button}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </Link>
        </div>
    );
}

export default GoToCharts;
