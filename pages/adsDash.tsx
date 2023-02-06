import { useContext, useState } from "react";
import { MetaMaskContext } from "@/hooks";
import Nav from "@/comps/nav";
import AdsListCard from "@/comps/adsListCard";
import Metrics from "@/comps/metrics";
import styles from '@/styles/adsDash.module.scss';
import metamaskLogo from '@/assets/metamask-logo.png';

export default function adsDash() {
    
    return (
        <>
            <Nav />
            <div className={styles.infoWrapper}>
                <div className={styles.infoCard}>
                    <div className={styles.metamaskLogo}>
                        <img src={metamaskLogo.src} />
                    </div>
                    <div className={styles.info}>
                        <h1>Metamask Ad</h1>
                        <p>Create content to articulate message about DAO operations. vision, mission and structure for social platforms. Create content to articulate message about DAO operations. vision, mission and structure for social platforms.</p>
                    </div>
                </div>
                <div className={styles.fillerCard}></div>
            </div>
            <hr className={styles.hrLine} />
            <div className={styles.adsWrapper}>
                <div className={styles.adsList}>
                    <h1>Ads posted</h1>
                    <AdsListCard />
                </div>
                <div className={styles.metricsWrapper}>
                    <h1>Metrics</h1>
                    <Metrics />
                    {/* <MetricsCard /> */}
                </div>
            </div>
        </>
    )
}