import styles from "./Overlay.module.scss"

export const Overlay = () => {
    
    const noscroll = () => {
        window.scrollTo(0, 0)
    }
    window.addEventListener("scroll", noscroll)

    return (
        <div className={styles.overlay}>  
        </div>
    )
}

