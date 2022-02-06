import styles from "./LandingPage.module.scss"
import { Hero } from "./Hero/Hero"
export const LandingPage = () => {
    return (
        <div className={styles.landing}>
            <Hero />
        </div>
    )
}
