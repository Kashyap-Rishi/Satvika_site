import styles from "../../styles/Slider.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
const Slider = () =>{
    return(
        <div className={styles.sliderparent}>
        
        <div className={styles.blackbg}>

            <div className={styles.captionpart}>
                <div className={styles.capt}>
                <div className={styles.head}><h1>Optimised for better living</h1></div>
                <div className={styles.body}><FontAwesomeIcon className={styles.arrow} icon={faCircleArrowDown} style={{"--fa-primary-color": "#ebebeb", "--fa-secondary-color": "#00c7fc", "--fa-secondary-opacity": "1","--fa-primary-opacity":"1",}} /><div>Explore companies profile</div>
                </div>
                </div>
                <div className={styles.comparisions}>
                    <div className={styles.c1}>
                        Other Real Estate Companies
                    </div>
                    <div className={styles.c2}>
                        Satvika Group of Companies
                    </div>
                </div>
                <div className={styles.mainslider}></div>
                <div className={styles.buttonset}>
                    <div className={styles.b1}>About Us</div>
                    <div className={styles.b2}>Enquiry</div>
                </div>

            </div>
            <div className={styles.bottomcontent}>The purpose of this comparison is to establish a clear perspective of our vision and work style. And is not to defame any other companies in any way.</div>
        </div>

    </div>
    )

}

export default Slider;