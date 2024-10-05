import About from "../../components/About/About";
import LandingPage from "../../components/LandingPage/LandingPage";
import GoToCharts from "./GoToCharts/GoToCharts";
import styles from "./page.module.css"


export default function Home() {
  return (
    <main className={styles.container}>
      <LandingPage />
      <About />
      <GoToCharts header="Explore Real-Time Data Visualizations" text="Discover interactive charts that enhance your understanding of features and data insights." link="/Charts" />
      <GoToCharts header="Access the Project Report" text="Review the statistical analysis and conclusions drawn from the project report." link="/Report" />
    </main>
  );
}
