import styles from '@/styles/Nav.module.css'
import style from '@/styles/Nav.module.scss'

const Nav = () => {
    return ( 
        <div className={styles.h_nav}>
        <div className={styles.home_top}>
            <svg width="168" height="32" viewBox="0 0 168 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_11_73)">
<path d="M147.864 16.1534C146.949 15.5399 145.932 15.131 145.017 14.6198C144.407 14.3131 143.797 14.0064 143.186 13.4952C142.271 12.7796 142.475 11.246 143.39 10.6326C144.712 9.71247 146.949 10.2237 147.254 12.0639C147.254 12.0639 147.254 12.1661 147.356 12.1661H149.39C149.492 12.1661 149.492 12.1661 149.492 12.0639C149.39 10.8371 148.881 9.71247 147.966 9.09905C147.153 8.48564 146.136 8.07669 145.119 8.07669C139.729 8.07669 139.22 13.8019 142.17 15.5399C142.475 15.7444 145.322 17.1757 146.339 17.7892C147.356 18.4026 147.661 19.5272 147.254 20.4473C146.847 21.2652 145.831 21.8786 144.814 21.7764C143.695 21.6741 142.78 21.0607 142.475 20.1406C142.373 19.9361 142.373 19.6294 142.373 19.5272C142.373 19.5272 142.373 19.4249 142.271 19.4249H140.034C140.034 19.4249 139.932 19.4249 139.932 19.5272C139.932 21.163 140.339 21.9808 141.458 22.7987C142.475 23.6166 143.593 23.9233 144.712 23.9233C147.763 23.9233 149.288 22.1853 149.593 20.4473C149.898 18.7093 149.39 17.1757 147.864 16.1534Z" fill="white"/>
<path d="M52.0678 8.38339H51.0508H49.9322C49.9322 8.38339 49.8305 8.38339 49.8305 8.48563L48 14.5176C48 14.6198 47.8983 14.6198 47.7966 14.5176L45.9661 8.48563C45.9661 8.48563 45.9661 8.38339 45.8644 8.38339H44.7458H43.7288H42.7119C42.7119 8.38339 42.6102 8.38339 42.6102 8.48563V23.8211C42.6102 23.8211 42.6102 23.9233 42.7119 23.9233H44.9492C44.9492 23.9233 45.0508 23.9233 45.0508 23.8211V12.0639C45.0508 11.9617 45.1525 11.9617 45.2542 12.0639L47.0847 18.0959L47.1864 18.5048C47.1864 18.5048 47.1864 18.607 47.2881 18.607H49.0169C49.0169 18.607 49.1186 18.607 49.1186 18.5048L49.2203 18.0959L51.0508 12.0639C51.0508 11.9617 51.2542 11.9617 51.2542 12.0639V23.7189C51.2542 23.7189 51.2542 23.8211 51.3559 23.8211H53.5932C53.5932 23.8211 53.6949 23.8211 53.6949 23.7189V8.38339C53.6949 8.38339 53.6949 8.28116 53.5932 8.28116H52.0678V8.38339Z" fill="white"/>
<path d="M114.102 8.38339C114 8.38339 114 8.38339 114.102 8.38339L112.17 14.4153C112.17 14.5176 112.068 14.5176 111.966 14.4153L110.136 8.38339C110.136 8.38339 110.136 8.28116 110.034 8.28116H106.78C106.78 8.28116 106.678 8.28116 106.678 8.38339V23.7189C106.678 23.7189 106.678 23.8211 106.78 23.8211H109.017C109.017 23.8211 109.119 23.8211 109.119 23.7189V12.0639C109.119 11.9617 109.22 11.9617 109.322 12.0639L111.153 18.0959L111.254 18.5048C111.254 18.5048 111.254 18.607 111.356 18.607H113.085C113.085 18.607 113.186 18.607 113.186 18.5048L113.288 18.0959L115.119 12.0639C115.119 11.9617 115.322 11.9617 115.322 12.0639V23.7189C115.322 23.7189 115.322 23.8211 115.424 23.8211H117.661C117.661 23.8211 117.763 23.8211 117.763 23.7189V8.38339C117.763 8.38339 117.763 8.28116 117.661 8.28116H114.102V8.38339Z" fill="white"/>
<path d="M85.6271 8.38339H81.5593H79.322H75.2543C75.2543 8.38339 75.1526 8.38339 75.1526 8.48563V10.4281C75.1526 10.4281 75.1526 10.5304 75.2543 10.5304H79.322V23.8211C79.322 23.8211 79.322 23.9233 79.4237 23.9233H81.661C81.661 23.9233 81.7627 23.9233 81.7627 23.8211V10.5304H85.8305C85.8305 10.5304 85.9322 10.5304 85.9322 10.4281L85.6271 8.38339C85.7288 8.38339 85.6271 8.38339 85.6271 8.38339Z" fill="white"/>
<path d="M98.6441 23.8211H100.678C100.78 23.8211 100.78 23.7189 100.78 23.7189L96.6102 8.38339C96.6102 8.38339 96.6102 8.28116 96.5085 8.28116H95.6949H94.3729H93.5593C93.5593 8.28116 93.4576 8.28116 93.4576 8.38339L89.2881 23.7189C89.2881 23.8211 89.2881 23.8211 89.3898 23.8211H91.4237C91.4237 23.8211 91.5254 23.8211 91.5254 23.7189L92.7458 19.2205C92.7458 19.2205 92.7458 19.1182 92.8475 19.1182H97.322C97.322 19.1182 97.4237 19.1182 97.4237 19.2205L98.6441 23.8211C98.5424 23.8211 98.5424 23.8211 98.6441 23.8211ZM93.3559 17.0735L94.9831 11.1438C94.9831 11.0415 95.0847 11.0415 95.1864 11.1438L96.8136 17.0735C96.8136 17.1757 96.8136 17.1757 96.7119 17.1757H93.4576C93.3559 17.1757 93.3559 17.0735 93.3559 17.0735Z" fill="white"/>
<path d="M132.814 23.8211H134.847C134.949 23.8211 134.949 23.7189 134.949 23.7189L130.78 8.38339C130.78 8.38339 130.78 8.28116 130.678 8.28116H129.864H128.542H127.729C127.729 8.28116 127.627 8.28116 127.627 8.38339L123.458 23.7189C123.458 23.8211 123.458 23.8211 123.559 23.8211H125.593C125.593 23.8211 125.695 23.8211 125.695 23.7189L126.915 19.2205C126.915 19.2205 126.915 19.1182 127.017 19.1182H131.492C131.492 19.1182 131.593 19.1182 131.593 19.2205L132.814 23.8211ZM127.627 17.0735L129.254 11.1438C129.254 11.0415 129.356 11.0415 129.458 11.1438L131.085 17.0735C131.085 17.1757 131.085 17.1757 130.983 17.1757H127.729C127.627 17.1757 127.627 17.0735 127.627 17.0735Z" fill="white"/>
<path d="M62.339 21.5719V16.869C62.339 16.869 62.339 16.7668 62.4407 16.7668H68.339C68.339 16.7668 68.4407 16.7668 68.4407 16.6645V14.722C68.4407 14.722 68.4407 14.6198 68.339 14.6198H62.4407C62.4407 14.6198 62.339 14.6198 62.339 14.5176V10.4281C62.339 10.4281 62.339 10.3259 62.4407 10.3259H69.1525C69.1525 10.3259 69.2542 10.3259 69.2542 10.2236V8.48563C69.2542 8.48563 69.2542 8.38339 69.1525 8.38339H62.339H60.1017C60.1017 8.38339 60 8.38339 60 8.48563V10.4281V14.6198V16.6645V21.5719V23.6166C60 23.6166 60 23.7189 60.1017 23.7189H62.339H69.3559C69.3559 23.7189 69.4576 23.7189 69.4576 23.6166V21.5719C69.4576 21.5719 69.4576 21.4697 69.3559 21.4697L62.339 21.5719C62.4407 21.5719 62.339 21.5719 62.339 21.5719Z" fill="white"/>
<path d="M168 23.7189L160.373 15.8467V15.7444L167.288 8.58787C167.39 8.48563 167.288 8.48563 167.186 8.48563H164.339C164.339 8.48563 164.339 8.48563 164.237 8.48563L158.441 14.5176C158.339 14.6198 158.339 14.5176 158.339 14.4153V8.48563C158.339 8.48563 158.339 8.38339 158.237 8.38339H156C156 8.38339 155.898 8.38339 155.898 8.48563V23.8211C155.898 23.8211 155.898 23.9233 156 23.9233H158.237C158.237 23.9233 158.339 23.9233 158.339 23.8211V17.0735C158.339 16.9713 158.441 16.9713 158.441 16.9713L165.051 23.8211C165.051 23.8211 165.051 23.8211 165.153 23.8211H168C168 23.8211 168.102 23.7189 168 23.7189Z" fill="white"/>
<path d="M32.6441 0.102234L19.2203 10.0192L21.661 4.19169L32.6441 0.102234Z" fill="#E17726" stroke="#E17726" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.83051 0.102234L15.0508 10.1214L12.7119 4.19169L1.83051 0.102234Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.8644 23.2077L24.3051 28.6262L31.9322 30.7732L34.0678 23.3099L27.8644 23.2077Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M0.406769 23.3099L2.54236 30.7732L10.1695 28.6262L6.61016 23.2077L0.406769 23.3099Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.7627 13.9041L7.62711 17.0735L15.1525 17.3802L14.9491 9.20126L9.7627 13.9041Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.7119 13.9041L19.4237 9.20126L19.2203 17.4824L26.7458 17.1757L24.7119 13.9041Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.1695 28.6262L14.7458 26.377L10.7797 23.3099L10.1695 28.6262Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.7288 26.377L24.3051 28.6262L23.6949 23.3099L19.7288 26.377Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.3051 28.6262L19.7288 26.377L20.1356 29.3418V30.5687L24.3051 28.6262Z" fill="#D5BFB2" stroke="#D5BFB2" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.1695 28.6262L14.4407 30.6709V29.4441L14.8475 26.4792L10.1695 28.6262Z" fill="#D5BFB2" stroke="#D5BFB2" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.4407 21.3674L10.678 20.2428L13.322 19.016L14.4407 21.3674Z" fill="#233447" stroke="#233447" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.9322 21.3674L21.0508 19.016L23.6949 20.2428L19.9322 21.3674Z" fill="#233447" stroke="#233447" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.1695 28.6262L10.7797 23.2077L6.61017 23.3099L10.1695 28.6262Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.5932 23.2077L24.2034 28.6262L27.7627 23.3099L23.5932 23.2077Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.8474 17.1757L19.322 17.4824L20.0339 21.3674L21.1525 19.016L23.7966 20.2428L26.8474 17.1757Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.678 20.2428L13.322 19.016L14.4407 21.3674L15.1525 17.4824L7.62711 17.1757L10.678 20.2428Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.62711 17.1757L10.7796 23.4121L10.678 20.345L7.62711 17.1757Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.7966 20.2428L23.6949 23.3099L26.8475 17.0735L23.7966 20.2428Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.1525 17.4824L14.4407 21.3674L15.3559 25.968L15.5593 19.9361L15.1525 17.4824Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.2203 17.4824L18.8136 19.9361L19.017 25.968L19.9322 21.3674L19.2203 17.4824Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.9322 21.3674L19.017 25.968L19.6271 26.377L23.5932 23.3099L23.6949 20.2428L19.9322 21.3674Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.678 20.2428L10.7797 23.3099L14.7458 26.377L15.3559 25.968L14.4407 21.3674L10.678 20.2428Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0339 30.6709V29.4441L19.7288 29.1374H14.6441L14.339 29.4441V30.6709L10.1695 28.6262L11.6949 29.853L14.6441 31.8978H19.8305L22.8814 29.853L24.3051 28.6262L20.0339 30.6709Z" fill="#C0AC9D" stroke="#C0AC9D" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.7288 26.377L19.1187 25.968H15.3559L14.7458 26.377L14.339 29.3419L14.6441 29.0351H19.7288L20.0339 29.3419L19.7288 26.377Z" fill="#161616" stroke="#161616" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M33.1525 10.7348L34.2712 5.21406L32.5424 0.102234L19.7288 9.71246L24.7119 13.9042L31.7288 15.9489L33.2542 14.1086L32.5424 13.6997L33.661 12.6773L32.8475 12.0639L33.9661 11.246L33.1525 10.7348Z" fill="#763E1A" stroke="#763E1A" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M0.101685 5.21406L1.22033 10.7348L0.508464 11.246L1.62711 12.0639L0.813549 12.6773L1.93219 13.6997L1.22033 14.2109L2.74575 16.0511L9.7627 14.0064L14.7458 9.8147L1.8305 0.102234L0.101685 5.21406Z" fill="#763E1A" stroke="#763E1A" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M31.7288 15.9489L24.7119 13.9041L26.8475 17.0735L23.6949 23.3099L27.8644 23.2077H34.0678L31.7288 15.9489Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.7627 13.9041L2.74575 15.9489L0.406769 23.2077H6.61016L10.7797 23.3099L7.62711 17.0735L9.7627 13.9041Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.2203 17.4824L19.6271 9.71245L21.661 4.19168H12.6102L14.6441 9.71245L15.0508 17.4824L15.2542 19.9361V25.968H19.0169V19.9361L19.2203 17.4824Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_11_73">
<rect width="168" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

<svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="16.5517" fill="white"/>
<path d="M9.10014 14L11.2375 3.24138H13.0163L15.125 14H13.4323L13.1167 12.1639H11.1156L10.7928 14H9.10014ZM11.3738 10.5142H12.8585L12.0121 5.49352H12.2417L11.3738 10.5142ZM16.5165 14V3.24138H19.0986C19.8971 3.24138 20.5331 3.48524 21.0065 3.97296C21.4798 4.45591 21.7165 5.09664 21.7165 5.89517V11.3462C21.7165 12.14 21.4798 12.7807 21.0065 13.2684C20.5331 13.7561 19.8971 14 19.0986 14H16.5165ZM18.1662 12.3503H19.0986C19.3998 12.3503 19.6365 12.2595 19.8087 12.0778C19.9808 11.8913 20.0669 11.6474 20.0669 11.3462V5.89517C20.0669 5.59393 19.9808 5.35246 19.8087 5.17076C19.6365 4.98428 19.3998 4.89103 19.0986 4.89103H18.1662V12.3503Z" fill="#121212"/>
</svg>
        </div>
        <div className={style.h_about}>About Us</div>

        </div>
     );
}
 
export default Nav;