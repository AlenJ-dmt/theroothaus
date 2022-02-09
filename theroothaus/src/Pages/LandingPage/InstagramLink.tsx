import styles from "./InstagramLink.module.scss"
import { FC } from "react"

interface IInstagramLinkProps {
    link: string
}

export const InstagramLink: FC<IInstagramLinkProps> = ({ link }) => {
    return (
        <div className={styles.container}>
            <img src={link} />
        </div>
    )
}