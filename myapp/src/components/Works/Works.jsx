import React from 'react'
import styles from "../../Styles/Works.module.css"

const Works = () => {
  return (
    <div className={styles.parent_cont}>
        <div className={styles.right_cont}>
     
        <div className={styles.right_subleft}>
        <span className={styles.head1}>HOW WE WORK</span>
        <div className={styles.numbering_para}>
        <div className={styles.numbering}>
        <div className={styles.rules}>
        <span>1</span>
        </div>
        <div className={styles.rules}>
        <span>2</span>
        </div>
        <div className={styles.rules}>
        <span>3</span>
        </div>
        </div>
        <div className={styles.para}>
        <div className={styles.info}>
        <h3>Strategy and Planning</h3>
        <p>From the dress you’re wearing to the smartphone you’re holding, it’s design.Its all about design.</p>
        </div>
        <div className={styles.info}>
        <h3>Finance and Restructuring</h3>
        <p>From the dress you’re wearing to the smartphone you’re holding, it’s design.Its all about design.</p>
        </div>
        <div className={styles.info}>
        <h3>Support and Maintenance</h3>
        <p>From the dress you’re wearing to the smartphone you’re holding, it’s design.Its all about design.</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className={styles.left_cont}> 
        <img src="images/hero-img.png" alt=""/>
        </div>

    
    </div>
  )
}

export default Works
