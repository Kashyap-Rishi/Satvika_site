import styles from "../../Styles/Footer.module.css";

const Footer = () =>{
    return(
        <div className={styles.FooterSection}>
            <div className={styles.brandname}><h3><b>SATVIKA</b></h3></div>
            <div className={styles.Sections}>
                <div className={styles.addressLine}>Address Line<div>+91 90545841512</div><div><u>Click to open maps</u></div></div>
                <div className={styles.companyLine}>Company
                <div className={styles.groups}>
                <div>SATVIKA Group</div>
                    <div>Gallery</div>
                    <div>Careers</div>
                    <div>Contact Us</div>
                </div>

                    </div>
                <div className={styles.projectLine}>Projects
                <div className={styles.groups}>
                <div>Heights</div>
                    <div>DULAR Estate</div>
                    <div>ALPHA Tower</div>
                </div>
                </div>

                <div className={styles.connectLine}>Connect
                <div className={styles.groups}>
                <div>Staff Login</div>
                    <div>Client Login</div>
                    <div>Support</div>
                </div>
                </div>

            </div>
            <div className={styles.socials}></div>
            <div className={styles.copyright}><div className={styles.copyrightinner}>@Copyright @023-26 SATVIKA Group. All Rights Reserved | Designed with Polardot.in </div><div>Site Map | Term & Condition | Polardot.in</div></div>
        </div>
    )
}

export default Footer;