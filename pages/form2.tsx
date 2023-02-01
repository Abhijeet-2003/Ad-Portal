import Nav from '@/comps/nav';
import styles from '@/styles/Form2.module.css'
import arrow from '@/assets/arrow.svg'
import bullet from '@/assets/bullet.svg'
import Link from 'next/link';
import pic_drag from '@/assets/pic_drag.svg'



const Form2 = () => {

    return (
        <div className={styles.form2}>
            <Nav/>

            <div className={styles.step_bar}>
                <Link href='/form1'><img src={arrow.src} alt=""/></Link>
                <div className={styles.bars}>
                    <div></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>

            <div className={styles.form_cont}>

                <div className={styles.img_cont}>
                    <img src={pic_drag.src} alt="" />
                    <div className={styles.upl_cont}>
                        <span className={styles.upl_text}>Upload a file</span>
                        <span className={styles.drag}> or drag and drop</span>
                    </div>
                    <div className={styles.limit_cont}>PNG, JPG, GIF up to 10MB</div>
                </div>

                <div className={styles.text_cont}>
                    <div className={styles.time}>Now its time to Create your Ad</div>
                    <div className={styles.points_cont}>
                        <div className={styles.point_cont}>
                            <img src={bullet.src} alt="" />
                            <div className={styles.point}>Advertisers can use our platform to create highly targeted campaigns that reach users based on their interests and demographics. </div>
                        </div>
                        <div className={styles.point_cont}>
                            <img src={bullet.src} alt="" />
                            <div className={styles.point}>Our platform offers a user-friendly interface that is easy to navigate and understand.</div>
                        </div>
                    </div>
                </div>

                <div className={styles.proc_button}><Link href='/form3'>Proceed to Ad</Link></div>

            </div>

        </div>
    );
}
 
export default Form2;