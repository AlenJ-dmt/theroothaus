import { Container } from "../../common/Container"
import { Typography } from "../../common/Typography"
import { FC } from "react"
import { colors } from "../../constants/colors"
import styles from "./SliderBlock.module.scss"

interface ISliderBlock {
    image: string
    title: string
}

export const SliderBlock: FC<ISliderBlock> = ({ image, title }) => {
    return (
        <Container orientation="vertical">
            <img className={styles.image} src={image} />
            <Typography color={colors["base-black"]} type="h3">{title}</Typography>
        </Container>
    )
}