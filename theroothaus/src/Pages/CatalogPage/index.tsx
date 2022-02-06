//index should recive a title in props an so a description
//for the header an a list of items depending on the category

import styles from "./index.module.scss"

export const CatalogPage = () => {
    return(
        <div className={styles["catalog-container"]}>
            <p>Products</p>
        </div>
    )
}

