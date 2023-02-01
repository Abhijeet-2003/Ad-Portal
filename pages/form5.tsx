import arrow from '@/assets/arrow.svg'
import Nav from '@/comps/nav';
import styles from '@/styles/Form5.module.css'
import Link from 'next/link';

const Form5 = () => {
    return (
        <div className={styles.form5}>
            <Nav/>

            <div className={styles.step_bar}>
                <Link href='/form4'><img src={arrow.src} alt=""/></Link>
                <div className={styles.bars}>
                    <div></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>


        </div>
    );
}
 
export default Form5;