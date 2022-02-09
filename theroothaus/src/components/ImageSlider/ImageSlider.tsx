import micans from "../../../src/images/micans.jpg"
import mic from "../../../src/images/mic.jpg"
import globalGreen from "../../../src/images/globalGreen.jpg"
import styles from "./ImageSlider.module.scss"
import { LeftArrowIcon } from "../../common/icons/LeftArrowIcon"
import { RightArrowIcon } from "../../common/icons/RightArrow"
import { Container } from "../../common/Container"
import { colors } from "../../constants/colors"
import { useState, FC } from "react"
import { SliderBlock } from "./SliderBlock"
import { newArrival } from "../../Pages/LandingPage/NewArrivals"


interface IImageSliderProps {
    newArrivals: newArrival[]
}

export const ImageSlider: FC<IImageSliderProps> = ({ newArrivals }) => {

    const [index, setIndex] = useState(0)

    const moveSlider = (direction: "right" | "left") => {

        if (index === 0 && direction === "left") {
            setIndex(newArrivals.length - 1)
            return
        }
        else if (index === newArrivals.length - 1 && direction === "right") {
            setIndex(0)
            return
        }
        else if (direction === "left") {
            const updateIndex = index - 1
            setIndex(updateIndex)
            return
        }
        else if (direction === "right") {
            console.log("here")
            const updateIndex = index + 1
            setIndex(updateIndex)
            return
        }

    }

    return (
        <div className={styles.slider}>
            <LeftArrowIcon onClick={() => moveSlider("left")} size="3rem" color={colors["base-dark-green"]} />
            <div className={styles["slider-container"]}>
                <SliderBlock image={newArrivals[index].imageLink} title={newArrivals[index].title} />
            </div>
            <RightArrowIcon onClick={() => moveSlider("right")} size="3rem" color={colors["base-dark-green"]} />
        </div>
    )
}