import bg from "../../../images/bg.jpg"
import styles from "./Hero.module.scss"
import { colors } from "../../../constants/colors"

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <img src={bg} />
            <div className={styles.message}>
                <div className={styles["text-holder"]}>
                    <svg
                        stroke={colors["base-white"]}
                        fill={colors["base-white"]}
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em" >
                        <g>
                            <path fill="none" d="M0 0h24v24H0z">
                            </path>
                            <path d="M10 6v2H6v10H4V8H0V6h10zm2 0h2.5l3 5.196L20.5 6H23v12h-2V9.133l-3.5 6.063L14 9.135V18h-2V6z">
                            </path>
                        </g>
                    </svg>
                    <p>You don't have too many plants</p>
                </div>
                <div>
                    <button>
                        Shop all
                    </button>
                    <button>
                        Shop by category
                    </button>
                </div>
            </div>
        </div>
    )
}