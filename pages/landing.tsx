import Nav from '@/comps/nav';
import styles from '@/styles/Landing.module.css'
import meta from '@/assets//metamask.gif'

const Landing = () => {
    return (
        <div className={styles.landing}>
            <Nav/>

            <div className={styles.cont}>
                <div className={styles.cont1}>
                    <div className={styles.top}>
                        <div className={styles.grow}>Grow your community with Metamask Ads</div>
                        <div className={styles.desc}>Be seen by users at the very moment they do a transaction in a popular dapp using metamask wallet.</div>
                    </div>
                    <div className={styles.down}>
                        <div className={styles.conn_button}><div>Connect Wallet</div></div>
                        <div className={styles.text}>Get started with free personalised support. Create your custom ad plan with Metamask Ads</div>
                    </div>
                </div>
                <div className={styles.cont2}>
                    <img src={meta.src} alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default Landing;