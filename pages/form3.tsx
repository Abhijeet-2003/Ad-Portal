import Nav from '@/comps/nav';
import styles from '@/styles/Form3.module.css'
import arrow from '@/assets/arrow.svg'
import Link from 'next/link';
import { useState } from 'react';

const Form3 = () => {

    let [heading,setHeading] = useState('Heading');
    let [body,setBody] = useState('Body');
    let [cta, setCta] = useState('CTA');

    return (
        <div className={styles.form3}>
            <Nav/>

            <div className={styles.step_bar}>
                <Link href='/form2'><img src={arrow.src} alt=""/></Link>
                <div className={styles.bars}>
                    <div></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>

            <div className={styles.form_cont}>
                <div className={styles.preview_cont}>
                    <div className={styles.see_cont}>
                        <div className={styles.heading}>{heading}</div>
                        <div className={styles.body}>{body}</div>
                        <div className={styles.cta}><div>{cta}</div></div>
                    </div>
                    <div className={styles.preview_txt}>Preview</div>
                </div>

                <div className={styles.down_cont}>
                    <div className={styles.time_cont}>
                        <div className={styles.time}>Now its time to write your Ad</div>
                        <div className={styles.inp_cont}>
                            <input type="text" placeholder='Heading' onChange={(e)=> setHeading(e.target.value)}/>
                            <input type="text" placeholder='Body' onChange={(e)=> setBody(e.target.value)}/>
                            <input type="text" placeholder='CTA button name' onChange={(e)=> setCta(e.target.value)}/>
                        </div>
                    </div>

                    <div className={styles.proc_button}><Link href='/form4'>Proceed to Ad</Link></div>
                </div>

            </div>
        </div>
    );
}
 
export default Form3;