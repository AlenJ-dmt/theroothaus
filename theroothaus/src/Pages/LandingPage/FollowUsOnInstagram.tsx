import { Section } from "../../common/Section"
import { Typography } from "../../common/Typography"
import { colors } from "../../constants/colors"
import styles from "./FollowUsOnInstagram.module.scss"
import { FC } from "react"
import { InstagramLink } from "./InstagramLink"

interface IFollowUsProps {
    links: string[]
}

export const FollowUsOnInstagram: FC<IFollowUsProps> = ({ links }) => {
    return (
        <Section className={styles.main} >
            <Typography align="center" color={colors["base-black"]} type="h2">
                Follow Us On Instagram
            </Typography>
            <div className={styles.instagram}>
                {
                    links.map(_ => {
                        return <InstagramLink link={_} />
                    })
                }
            </div>

        </Section>
    )
}