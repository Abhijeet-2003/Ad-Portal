import arrow from '@/assets/arrow.svg'
import Nav from '@/comps/nav';
import styles from '@/styles/Form5.module.css'
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import line from '@/assets/line.svg'

const Form5 = () => {
    let [val,setVal] = useState(0);
    let [total,setTotal] = useState(0.024)

    const ref = useRef<HTMLInputElement>(null);

    // useEffect(() => {
    //     const element = ref.current;
    //     console.log(element);
    //     console.log(element.id);
    //   }, []);
    

    const valChange = (num:string) => {
        let n= Number(num);
        let final = n*(0.5-0.01)/100 + 0.01;
        setVal(Number(final).toFixed(3));
        let total = Number(final.toFixed(3))+0.024;
        setTotal(Number(total).toFixed(3));

        // const
        // rangeV = ref.current,
        // setValue = ()=>{
        //     const
        //     newValue = Number( (n - 0) * 100 / (100 - 0) ),
        //     newPosition = 10 - (newValue * 0.2);
        //     rangeV!.innerHTML = `<span>${Number(final).toFixed(3)} ETH</span>`;
        //     rangeV!.style.left = `calc(${newValue}% + (${newPosition}px))`;
        // };
        
    }

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

            <div className={styles.payment}>Payment</div>
            <div className={styles.consider}>Consider what you're advertising, and enter the most relevant page of your website. This might be your homepage, or  a more specific page.</div>

            <div className={styles.range_cont}>
                {/* <div className={styles.range_value} id="rangeV" ref={ref} ><span>34</span></div> */}
                <input type='range' id='range' className={styles.range} min='0' max='100' onChange={(e)=> valChange(e.target.value)} />
                <div className={styles.label_cont}>
                    <div className={styles.label}>0.01ETH</div>
                    <div className={styles.label}>0.5ETH</div>
                </div>
                <div className={styles.represent}>*This is currently just for representational purposes</div>
            </div>

            <div className={styles.money_top_cont}>
                <div className={styles.money_cont}>
                    <div className={styles.money_txt}>Ad Budget</div>
                    <div className={styles.money}>{val} ETH</div>
                </div>
                <div className={styles.money_cont}>
                    <div className={styles.money_txt}>Convenience fee</div>
                    <div className={styles.money}>0.012 ETH</div>
                </div>
                <div className={styles.money_cont}>
                    <div className={styles.money_txt}>Gas fee</div>
                    <div className={styles.money}>0.012 ETH</div>
                </div>
            </div>
            <img src={line.src} alt="" className={styles.line} />

            <div className={styles.money_cont}>
                <div className={styles.money_txt}>Total payable amount</div>
                <div className={styles.money}>{total} ETH</div>
            </div>

            <div className={styles.proc_button}><Link href='#'>Proceed to Pay</Link></div>


        </div>
    );
}
 
export default Form5;