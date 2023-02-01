import Nav from '@/comps/nav';
import arrow from '@/assets/arrow.svg'
import styles from '@/styles/Form4.module.css'
import Link from 'next/link';

const Form4 = () => {
    return (
        <div className={styles.form4}>
            <Nav/>

            <div className={styles.step_bar}>
                <Link href='/form3'><img src={arrow.src} alt=""/></Link>
                <div className={styles.bars}>
                    <div></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>

            <div className={styles.form_cont}>
                <div className={styles.where_txt}>Where should people go after clicking your Ad?</div>
                <div className={styles.web_inp}>
                    <input type="text" placeholder='website link'/>
                </div>
                <div className={styles.consider}>Consider what you're advertising, and enter the most relevant page of your website. </div>
                <div className={styles.proc_button}><Link href='/form5'>Proceed to Payment</Link></div>
            </div>


        </div>
    );
}
 
export default Form4;