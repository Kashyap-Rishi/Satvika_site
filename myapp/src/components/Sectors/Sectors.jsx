import styles from "../../Styles/Sectors.module.css"

const Sectors = () =>{
    return(
        <div className={styles.SectorSection}>
            <div className={styles.Head}><h2>Our Major Sectors</h2></div>
            <div className={styles.SectorGroup}>
                <div className={styles.s1}><div className={styles.SectorHead1}>Residential Sector</div></div>
                <div className={styles.s2}><div className={styles.SectorHead2}>Commercial Sector</div></div>
                <div className={styles.s3}><div className={styles.SectorHead3}>Others</div></div>
                <div className={styles.s4}><div className={styles.SectorHead4}>Others</div></div>
            </div>
        </div>
    )
}

export default Sectors;