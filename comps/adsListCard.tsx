import styles from '@/styles/adsListCard.module.scss'

export default function AdsListCard() {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src="https://via.placeholder.com/150"/>
                </div>
                <h3>Demo</h3>
            </div>
        </>
    )
}