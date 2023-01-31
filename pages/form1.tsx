import Nav from '@/comps/nav';
import styles from '@/styles/Form1.module.css'
import arrow from '@/assets/arrow.svg'

const Form1 = () => {
    return (
        <div className={styles.form1}>
            <Nav/>

            <div className={styles.form_cont}>
                <div className={styles.step_bar}>
                    <img src={arrow.src} alt="" />
                    <div className={styles.bars}>
                        <div></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
 
export default Form1;