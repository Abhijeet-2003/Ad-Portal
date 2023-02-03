import Nav from '@/comps/nav';
import arrow from '@/assets/arrow.svg'
import styles from '@/styles/Form4.module.css'
import Link from 'next/link';
import { SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/router';

const Form4 = () => {
    const router = useRouter();
    console.log(router.query)
    const [website, setWebsite] = useState<string>();
    const proceedToNext = (e: SyntheticEvent) => {
        e.preventDefault();
        router.push({
            pathname: '/form5',
            query: { cid: router.query.cid, heading: router.query.heading, body: router.query.body, cta: router.query.cta, website: website }
        })
    }
    return (
        <div className={styles.form4}>
            <Nav/>

            <div className={styles.step_bar}>
                <Link href='/form3'><img src={arrow.src} alt=""/></Link>
                <div className={styles.bars}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className={styles.bar}></div>
                </div>
            </div>

            <div className={styles.form_cont}>
                <div className={styles.where_txt}>Where should people go after clicking your Ad?</div>
                <div className={styles.web_inp}>
                    <input type="text" placeholder='website link' onChange={e => setWebsite(e.target.value)}/>
                </div>
                <div className={styles.consider}>Consider what you're advertising, and enter the most relevant page of your website. </div>
                <button className={styles.proc_button} onClick={proceedToNext}>Proceed to Payment</button>
            </div>


        </div>
    );
}
 
export default Form4;